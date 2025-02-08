import { ModelsFirestore } from 'src/models/firestore.models';
import { ModelsAuth } from 'src/models/auth.models';
import { ModelsFunctions } from 'src/models/functions.models';

export namespace Models {

    export import Firestore = ModelsFirestore;
    export import Auth = ModelsAuth;
    export import Functions = ModelsFunctions;


}