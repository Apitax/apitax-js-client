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





/**
* The Command model module.
* @module model/Command
* @version 2
*/
export default class Command {
    /**
    * Constructs a new <code>Command</code>.
    * @alias module:model/Command
    * @class
    * @param options {Object} 
    * @param command {String} 
    */

    constructor(options, command) {
        

        
        

        this['options'] = options;this['command'] = command;

        
    }

    /**
    * Constructs a <code>Command</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Command} obj Optional instance to populate.
    * @return {module:model/Command} The populated <code>Command</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Command();

            
            
            

            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Object} parameters
    */
    parameters = undefined;
    /**
    * @member {Object} options
    */
    options = undefined;
    /**
    * @member {String} command
    */
    command = undefined;








}


