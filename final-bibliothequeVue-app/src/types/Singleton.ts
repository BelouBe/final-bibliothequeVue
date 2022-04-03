class Singleton {
    public static Utilisateur: Singleton | null = null
    constructor(
        public id: string,
        public nom: string,
        public prenom: string,
        public email: string,
        public matricule: string,
        public numero: string) {
            if(Singleton.Utilisateur != null) {
                Singleton.Utilisateur = {
                    id,
                    nom,
                    prenom,
                    email,
                    matricule,
                    numero
                }
            }
    }    
}

export default Singleton
