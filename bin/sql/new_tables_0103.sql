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


INSERT INTO monsters(name, personality)
    VALUES
    ('Fluffy', 'aggressive'),
    ('Noodles', 'friendly'),
    ('Ken', 'smart');


/*
CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name, personality)
    VALUES
    ('Fluffy', 'aggressive'),
    ('Noodles', 'friendly'),
    ('Ken', 'smart');

INSERT INTO habitats(name, climate, temperature)
    VALUES
    ('desert', 'dry', 100),
    ('forrset', 'haunted', 80),
    ('mountain', 'icy', 40);
INSERT INTO lives(monster, habitat)
    VALUES
    ('Fluffy', 'desert'),
    ('Noodles', 'beach'),
    ('Ken', 'ocean');*/