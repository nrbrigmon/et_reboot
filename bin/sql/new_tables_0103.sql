/* v1 process for creating tables and inserting new values*/
CREATE TABLE building_inputs(
    id serial unique,
    buildingname character varying(50),
    buildingheight float,
    sitearea real,
    sitelocation character varying(50)
);

CREATE TABLE building_outputs(
    monster character varying(50),
    habitat character varying(50)
);

CREATE TABLE building_libraries();

CREATE TABLE development_types();

CREATE TABLE scenario_ouputs();

CREATE TABLE app_users();

