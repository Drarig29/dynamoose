import * as combine_objects from "./combine_objects";
import * as merge_objects from "./merge_objects";
import timeout = require("./timeout");
import capitalize_first_letter = require("./capitalize_first_letter");
import set_immediate_promise = require("./set_immediate_promise");
import unique_array_elements = require("./unique_array_elements");
import array_flatten = require("./array_flatten");
import empty_function = require("./empty_function");
import object = require("js-object-utilities");
import dynamoose = require("./dynamoose");
import all_elements_match from "./all_elements_match";
import type_name from "./type_name";
import find_best_index from "./find_best_index";
import deep_copy from "./deep_copy";

export = {
	combine_objects,
	merge_objects,
	timeout,
	capitalize_first_letter,
	set_immediate_promise,
	unique_array_elements,
	all_elements_match,
	array_flatten,
	empty_function,
	object,
	dynamoose,
	type_name,
	find_best_index,
	deep_copy
};
