CREATE TABLE physical_inputs (
    id serial,
    buildingname character varying(50),
    buildingheight float,
    sitearea real,
    sitelocation character varying(50)
);

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