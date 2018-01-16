CREATE TABLE physical_inputs (
    id serial,
    buildingname character varying(50),
    buildingheight float,
    sitearea real,
    sitelocation character varying(50)
);

CREATE TABLE building_prototype_inputs (
    id serial,
    buildingname character varying(50),
    buildingheight float,
    sitearea real,
    sitelocation character varying(50)
);

CREATE TABLE building_prototype_outputs (
    linked_ids integer[]
);

CREATE TABLE development_type_inputs (
    id serial,
    building_ids integer[]
    
);

CREATE TABLE envision_users (
    id serial,
    building_library_ids integer[],
    date_started date
);

/* insert process */

INSERT INTO physical_inputs (buildingname, buildingheight, sitearea, sitelocation)
    VALUES 
        ('first building', 23, 23.432, 'Austin, TX'),
        ('second building', 33, 13.432, 'Paris, TX'),
        ('third building', 2, 21.432, 'Waco, TX');

INSERT INTO building_prototype_outputs (linked_ids)
    VALUES
        ('{1, 2, 3,6,7,8,0,1}');

INSERT INTO development_type_inputs (building_ids)
    VALUES
        ('{1, 2, 3,6,7,8,0,1}');

INSERT INTO envision_users (building_library_ids)
    VALUES
        ('{1, 2, 3,6,7,8,0,1}');