﻿FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM chatapp-build-image AS build

# copy config for .net
WORKDIR /src
COPY ["chatapp/chatapp.csproj", "chatapp/"]

# install .net dependencies
RUN dotnet restore "chatapp/chatapp.csproj"

# copy the source code(some files are ignored as per .dockerignore)
COPY . .

# run .net unit tests
WORKDIR backendroutingtests
RUN dotnet test
WORKDIR ..

# set working directory to where the root of the project is and build .net project 
WORKDIR "/src/chatapp"
RUN dotnet build "chatapp.csproj" -c Release -o /app/build

# run react unit tests(must be run in ClientApp dir)
WORKDIR ClientApp
RUN npm install react-scripts
RUN npm run test
# set workdir back to root
WORKDIR ..

FROM build AS publish
RUN dotnet publish "chatapp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "chatapp.dll"]