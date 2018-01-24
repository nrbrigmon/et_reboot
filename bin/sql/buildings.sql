/* create process */

CREATE TABLE building_prototype_inputs (
    id serial,
    attributes jsonb
);

CREATE TABLE building_prototype_outputs (
    linked_id character varying(50),
    attributes jsonb
);

CREATE TABLE development_type_inputs (
    id serial,
    attributes jsonb
    
);

CREATE TABLE envision_users (
    id serial,
    google_id character varying(100),
    building_library_ids text[],
    google_prof jsonb,
    date_started date
);

/* insert process */
/*
INSERT INTO envision_users (google_id, building_library_ids, date_started)
    VALUES 
        ('bbbg_sdfgsg', ARRAY[], CURRENT_TIMESTAMP);

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

        */