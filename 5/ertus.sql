-- sélectionne toutes les parcelles actives et afficher le nom de la parcelle, ainsi que le nom de son cépage.
SELECT par_cult.nom, par_cepage.nom FROM par_cult JOIN par_cepage ON par_cult.cepage_id = par_cepage.id WHERE par_cult.actif = true;

-- nombre de parcelles pour chaque cépage différent
SELECT par_cepage.nom, COUNT(*) AS nb_parcelles FROM par_cult JOIN par_cepage ON par_cult.cepage_id = par_cepage.id GROUP BY cepage_id;