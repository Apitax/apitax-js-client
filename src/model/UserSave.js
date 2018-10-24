/**
 * Apitax
 * The API for the frontend of Apitax
 *
 * OpenAPI spec version: 2
 * Contact: shawn.clake@nopatience.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import User from './User';





/**
* The UserSave model module.
* @module model/UserSave
* @version 2
*/
export default class UserSave {
    /**
    * Constructs a new <code>UserSave</code>.
    * @alias module:model/UserSave
    * @class
    * @param script {module:model/User} 
    */

    constructor(script) {
        

        
        

        this['script'] = script;

        
    }

    /**
    * Constructs a <code>UserSave</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserSave} obj Optional instance to populate.
    * @return {module:model/UserSave} The populated <code>UserSave</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserSave();

            
            
            

            if (data.hasOwnProperty('script')) {
                obj['script'] = User.constructFromObject(data['script']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/User} script
    */
    script = undefined;








}


