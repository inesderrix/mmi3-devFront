## P1 - L'utilisateur peut sélectionner la couleur de son tracé

J’ai ajouté dans la toolbar des pastille coloré qui permet de choisir la couleur du crayon.

La couleur sélectionnée est stockée dans un state.

Lors du dessin, la couleur active est utilisée au moment du `mousedown` et `mousemove`.  

La couleur est envoyée au serveur et est partagée avec les autres utilisateurs.  
Les tracés des autres utilisateurs sont affichés avec la couleur qu’ils ont choisie.

# B3 - Afficher une pastille avec la couleur du tracé de l’utilisateur dans la liste utilisateur

Ajout d’une pastille à côté de chaque utilisateur dans la liste pour afficher sa dernière couleur de tracé. 

Couleur mise à jour dès qu’un utilisateur commence à dessiner.  

Couleur stockée côté front dans `userStrokeColor` (Map userId → couleur).  

Si pas de couleur connue (comme au début vu que ca se mets à jour lorsque l'user commence à dessiner), pastille noire par défaut.  

# P2 - L’utilisateur peut sélectionner l’épaisseur de son tracé

Ajout de strokeWidth dans le store pour gérer l’épaisseur.

L’utilisateur peut choisir l’épaisseur dans la toolbar.

Chaque tracé utilise l’épaisseur active au moment de sa création (mousedown / mousemove).

L’épaisseur est envoyée au serveur et utilisée pour afficher les tracés des autres utilisateurs.

Les tracés déjà dessinés gardent l’épaisseur choisie à leur création, même si on change l’épaisseur ensuite.