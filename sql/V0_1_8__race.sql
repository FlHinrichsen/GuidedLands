START TRANSACTION;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `guidedlands`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `race`
--

CREATE TABLE race (
  id INT(11) NOT NULL AUTO_INCREMENT ,
  name VARCHAR(100) NOT NULL ,
  data_figuresize_id INT(11) NOT NULL ,
  data_deathvalue_death INT(11) NOT NULL ,
  data_injuryvalue_injury INT(11) NOT NULL ,
  data_lifevalue_life INT(11) NOT NULL , 
  data_initiativevalue_initiative INT(11) NOT NULL ,
  PRIMARY KEY (id),
  UNIQUE (name)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Constraints der Tabelle `race`
--

ALTER TABLE race ADD CONSTRAINT race_1 FOREIGN KEY (data_figuresize_id) REFERENCES data_figuresize (id);
ALTER TABLE race ADD CONSTRAINT race_2 FOREIGN KEY (data_deathvalue_death) REFERENCES data_deathvalue (death);
ALTER TABLE race ADD CONSTRAINT race_3 FOREIGN KEY (data_injuryvalue_injury) REFERENCES data_injuryvalue (injury);
ALTER TABLE race ADD CONSTRAINT race_4 FOREIGN KEY (data_initiativevalue_initiative) REFERENCES data_initiativevalue (initiative);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;