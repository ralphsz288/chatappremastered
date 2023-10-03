FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM chatapp-build-image AS prepare-build

# copy config for .net
WORKDIR /src
COPY ["chatapp/chatapp.csproj", "chatapp/"]

# install .net dependencies
RUN dotnet restore "chatapp/chatapp.csproj"

COPY . .

WORKDIR chatapp/ClientApp
RUN npm install

FROM prepare-build as test

ENV DB_DATABASE=$DB_DATABASE
ENV DB_HOST=$DB_HOST
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_PORT=$DB_PORT
ENV DB_USERNAME=$DB_USERNAME

# run react tests
RUN npm test

# run dotnet tests
WORKDIR /src/backendroutingtests
RUN dotnet test

FROM prepare-build as build
# set working directory to where the root of the project is and build .net project 
WORKDIR /src/chatapp
RUN dotnet build "chatapp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "chatapp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "chatapp.dll"]
