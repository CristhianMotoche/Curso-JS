# Sails commands
## Start a new application
The following command help us to create a **new sails** project.

```shell
$ sails new [application-name]
```

All the folders and files will be generated inside a folder with the [application-name].

For more commands, take a look at the following [link](<`2:#:http://sailsjs.com/documentation/reference/command-line-interface`> "CLI")<`4`>

## Start up
Go to your folder named [application-name]:

```
$ sails l
```

# Docker
## Start the Database
Start the docker container with the database:

```shell
$ docker run -d --name lambda -d -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=base -e MYSQL_USER=usuario -e MYSQL_PASSWORD=123456 mysql:latest
```

## Check docker containers running
```shell
$ docker ps -a
```

## Stop docker container
```shell
$ docker stop ([docker-container-id]|[docker-container-name])
```

Remove the container:
**NOTE:** You can only remove containers if you stop them.
```shell
$ docker stop ([docker-container-id]|[docker-container-name])
```
