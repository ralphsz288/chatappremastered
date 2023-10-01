#!/bin/bash
cd backendroutingtests
dotnet test

cd ../chatapp/ClientApp
npm run test
