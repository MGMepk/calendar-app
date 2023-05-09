Fins a dia d'avui hem anat desenvolupant poc a poc una aplicació per poder assolir objectius mitjançant un calendari.

Com recordeu l'enunciat deia que voliem poder introduïr quantes hores necessitem per poder assolir un objectiu, i durant la setmana quantes hores hi dedicariem per treballar-hi en aquests.

L'aplicació ens hauria de dir quin dia tindriem l'objectiu assolit.

Llavors volem una aplicació en la que poder indicar les hores que hi dedicarem cada dia de la setmana, quina és la data d'inici, i si hi han dies que sabem que no podrem treballar en l'objectiu (per exemple fem un viatge, estem malalts).

Per altra banda la propia aplicació hauria de saber quins dies són festius per tal de contar que aquells dies no treballaràs en l'objectiu, de forma automàtica.

Recordeu que volem aquesta aplicació en ReactJS, que s'ha de fer servir el patró MVVM, les dades de festius han de sortir d'una crida a una API (proposades per vosaltres o fins i tot creades per vosaltres amb Flask. Aquesta última és tindria molt en compte).

A banda també s'han d'entregar els jocs de proves que heu fet servir per tal de saber si el que entregareu funciona o no (recordeu fer proves mínimament complexes per tal d'asegurar una aplicació robusta).

De forma individual us demanaré que entregueu una millora o extra que serà diferent per cadascun i serà el gruix de la nota.

URLs:

    /                                 ======> ha de mostrar el dia actual, quin percentatge de cada objectiu actiu
    /new-objective                    ======> formulari per un nou objectiu, a la data inicial per defecte data actual
    /edit-objective/{id-objective}    ======> pàgina per editar un objectiu
    /delete-objective/{id-objective}  ======> elimina un objectiu i retorna a la pàgina /
    /show-objective/{id-objective}    ======> mostrar les dades d'un objectiu, inici, final i percentatge.


    Extra: Afegir un sistema de recordatoris de dates pròximes a finalitzar, quan entrem a l’aplicació ens 
    ha de mostrar un missatge indicant si un objectiu està pròxim a finalitzar i el temps que hi falta.