## P1 L'utilisateur peut sélectionner la couleur de son tracé

J’ai ajouté dans la toolbar des pastille coloré qui permet de choisir la couleur du crayon.

La couleur sélectionnée est stockée dans un state.

Lors du dessin, la couleur active est utilisée au moment du `mousedown` et `mousemove`.  

La couleur est envoyée au serveur et est partagée avec les autres utilisateurs.  
Les tracés des autres utilisateurs sont affichés avec la couleur qu’ils ont choisie.