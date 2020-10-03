### teamwork-capstone-database

In this folder contains the docker file and instructions to setup a running instance of the database this project uses


### Instructions

#### Prerequisite 
1. You have installed docker on yout machine preferably ``` version 19.03.12 ```

#### usage

1. pull postgresql image ``` docker pull postgres ```
2. check if the image is there ``` docker images ```
3. Create a folder to mount data volume for running database instance 
    - make volume folder    ``` mkdir ${HOME}/postgresql-data ```
    - run the postgre image ```
                            docker run --name dev-postgres -e POSTGRES_PASSWORD='{password} \
                            -e PGDATA=${HOME}/postgresql-data/:/var/lib/postgresql/data \
                            -v ${HOME}/postgresql-data
                            -p 5432:5432
                            postgres
                            ``` 
    - check that the container is running ``` docker ps ```
    - access the container by running ``` docker exec -it dev-postgres bash ```
You should be able to run POSTGRESQL Database
