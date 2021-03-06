/**
 * Created by Vikas
 * DATE : 2017-03-01
 */
'use strict';

/**
 * Import app required files
 */
import RulesRegx from '../config/RulesRegx';

/**
 * Define utility functions for validations of inputs
 */
const Rules = {
    /**
     * gateway function to call all other validation rules function
     */
    validateFields: function (validations, val) {
        if (validations.includes('required')) {
            if (val && typeof (val) == "string" && validations.length > 1) {
                return Rules.applyRegxRules(validations, val)
            } else {
                return val && typeof (val) == "string" ? { test: true, message: '' } : { test: false, message: RulesRegx.messages['required'] }
            }
        } else {
            if (val && typeof (val) == "string") {
                return Rules.applyRegxRules(validations, val);
            } else {
                return { test: true, message: '' }
            }
        }
    },

    /**
     * regex validation function
     */
    applyRegxRules: function (validations, val) {
        for (var i in validations) {
            if (validations[i] != 'required') {
                let onValidate = Rules.validateRegx(val, validations[i])
                if (!onValidate.test) {
                    return onValidate
                }
            }
        }
        return { test: true, message: '' }
    },

    /**
     * regx comparing to input function
     */
    validateRegx: function (val, rules) {
        let regex = new RegExp(RulesRegx.expressions[rules]);
        let message = RulesRegx.messages[rules];
        let test = regex.test(val);
        return { test, message }
    },

    /**
     * data mapping function
     */
    mapInputVal: function (currentVal, mappingVal) {
        let test = true;
        let message = RulesRegx.messages['mapError'];
        for (var i in mappingVal) {
            if (mappingVal[i] != currentVal) {
                test = false;
            }
        }
        return { test, message };
    }
};


export default Rules;