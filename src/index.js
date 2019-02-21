const component = require("@/components/form/formGenerator").default;
const schema = require("@/utils/schema.js");
const validators = require("@/utils/validators.js").default;
const fieldComponents = require("@/utils/fieldsLoader").default;
const abstractField = require("@/components/fields/abstractField").default;
const install = (Vue, options) => {
	Vue.component("VueFormGenerator", module.exports.component);
	if (options && options.validators) {
		for (let key in options.validators) {
			if ({}.hasOwnProperty.call(options.validators, key)) {
				validators[key] = options.validators[key];
			}
		}
	}
};

module.exports = {
	component,
	schema,
	validators,
	abstractField,
	fieldComponents,
	install
};
