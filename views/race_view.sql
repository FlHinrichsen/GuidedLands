SELECT 
    race.id,
    race.name,
    race.weight_1,
    race.weight_2,
    race.weight_3,
    race.weight_4,
    race.weight_5,
    race.weight_6,
    race.weight_7,
    race.weight_8,
    race.weight_9,
    race.weight_10,
    race.weight_11,
    data_lifevalue.price as lifeprice, 
    data_injuryvalue.price as injuryprice,
    data_initiativevalue.price as initprice,
    data_deathvalue.price as deathprice,
    data_figuresize.low,
    data_figuresize.high,
    data_figuresize.text as size,
    data_figuresizevalue.price as sizeprice,
    CEILING((race.weight_1
     + race.weight_2
     + race.weight_3
     + race.weight_4
     + race.weight_5
     + race.weight_6
     + race.weight_7
     + race.weight_8
     + race.weight_9
     + race.weight_10
     + race.weight_11) / 10) AS weight_price,
    (data_figuresizevalue.price 
     + data_lifevalue.price 
     + data_injuryvalue.price 
     + data_initiativevalue.price 
     + data_deathvalue.price 
     + CEILING((race.weight_1
         + race.weight_2
         + race.weight_3
         + race.weight_4
         + race.weight_5
         + race.weight_6
         + race.weight_7
         + race.weight_8
         + race.weight_9
         + race.weight_10
         + race.weight_11)
        / 10)
     - 30) as price
FROM 
    race, 
    data_lifevalue,
    data_injuryvalue,
    data_initiativevalue,
    data_figuresize,
    data_deathvalue,
    data_figuresizevalue
WHERE
    race.data_figuresize_id = data_figuresize.id
    AND race.data_deathvalue_death = data_deathvalue.death
    AND race.data_injuryvalue_injury = data_injuryvalue.injury
    AND race.data_lifevalue_life = data_lifevalue.life
    AND race.data_initiativevalue_initiative = data_initiativevalue.initiative
    AND race.data_figuresize_id = data_figuresizevalue.figuresize_id;