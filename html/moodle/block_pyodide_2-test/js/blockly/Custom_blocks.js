
"use strict";
Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"append_list",
            "message0":"add %1 to %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"to_add"
                },
                {
                    "type":"input_value",
                    "name":"list"
                }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "inputsInline":true,
            "colour":300,
            "tooltip":"Add something to the list",
            "helpUrl":""
        },
        {
            "type":"break",
            "message0":"break",
            "nextStatement":null,
            "previousStatement":null,
            "colour":180,
            "tooltip":"Breakes the loop",
            "helpUrl":""
        },
        {
            "type": "short_math",
            "message0": "%1 %2 = %3 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "a",
                    "check": "Number"
                },
                {
                    "type": "field_dropdown",
                    "name": "select",
                    "options": [
                        [
                            "+",
                            "+"
                        ],
                        [
                            "*",
                            "*"
                        ],
                        [
                            "-",
                            "-"
                        ],
                        [
                            "/",
                            "/"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "b",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "nextStatement":null,
            "previousStatement":null,
            "colour": 260,
            "tooltip": "Short version of arithmetic calculations",
            "helpUrl": ""
        },
        {
            "type": "for_list",
            "message0": "for %1 in %2 %3",
            "args0": [
                {
                    "type":"input_value",
                    "name":"iter"
                },
                {
                    "type": "input_value",
                    "name": "list"
                },
                {
                    "type": "input_statement",
                    "name": "to_do"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 260,
            "tooltip": "",
            "helpUrl": ""
        },
        {
            "type":"true",
            "message0":"true",
            "output":"Boolean",
            "colour":90,
            "tooltip":"true",
            "helpUrl":""
        },

        {
            "type":"false",
            "message0":"false",
            "output":"Boolean",
            "colour":90,
            "tooltip":"false",
            "helpUrl":""
        },
        {
            "type": "and_or",
            "message0": "%1 %2  %3 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "a",
                },
                {
                    "type": "field_dropdown",
                    "name": "select",
                    "options": [
                        [
                            "or",
                            "or"
                        ],
                        [
                            "and",
                            "and"
                        ],
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "b",
                }
            ],
            "inputsInline": true,
            "output":"Boolean",
            "colour": 50,
            "tooltip": "And/Or calculations",
            "helpUrl": ""
        },
        {
            "type":"ceil",
            "message0":"ceiling of %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":"Number",
            "colour":70,
            "tooltip":"Returns the least integer that is larger than input",
            "helpUrl":""
        },
        {
            "type":"max",
            "message0":"max in list %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Array"
                }
            ],
            "output":"Number",
            "inputsInline":true,
            "colour":70,
            "tooltip":"Returns the largest integer in list",
            "helpUrl":""
        },
        {
            "type":"list_with_element",
            "message0":"create list with element %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"element"
                    }
                ],
            "output":null,
            "colour":355,
            "tooltip":"Creates the list which contains an element",
            "helpUrl":""
        },
        {
            "type":"simple_for",
            "message0":"for %1 from %2 to %3 %4",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"varr"
                    },
                    {
                        "type":"input_value",
                        "name":"r1",
                        "check":"Number"
                    },
                    {
                        "type":"input_value",
                        "name":"r2",
                        "check":"Number"
                    },
                    {
                        "type":"input_statement",
                        "name":"to_do"
                    }
                ],
            "nextStatement":null,
            "previousStatement":null,
            "inputsInline":true,
            "colour":256,
            "tooltip":"Simplified version of for block",
            "helpUrl":""

        },
        {
            "type":"prime_list",
            "message0":"Primes smaller than %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"limit",
                        "check":"Number"
                    }
                ],
            "output":"Arrray",
            "colour":200,
            "tooltip":"Find primes smaller than the input",
            "helpUrl":""
        },
        {
            "type":"find_fract_list",
            "message0":"fractions of %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"num",
                        "check":"Number"
                    }
                ],
            "output":"Array",
            "colour":200,
            "tooltip":"Returns the list of the fraction of given input",
            "helpUrl":""
        },
        {
            "type":"universal_print",
            "message0":"print value of %1 %2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"inp"
                    },
                    {
                        "type":"field_dropdown",
                        "name":"property",
                        "options":[
                            ["none","none"],
                            ["add","add"],
                            ["remove","remove"]
                        ]
                    },
                ],
            "nextStatement":null,
            "previousStatement":null,
            "colour":205,
            "tooltip":"print function for list, num, ...etc",
            "helpUrl":"",
            "mutator":"print_custom_mutator"
        },
        {
            "type":"to_string",
            "message0":"change %1 to String",
            "args0":[
                {
                    "type":"input_value",
                    "name":"input",
                    "check":"Number"
                }
            ],
            "output":"String",
            "colour":190,
            "tooltip":"Converts number into string",
            "helpUrl":""
        },
        {
            "type":"slice_list",
            "message0":"slice %1 in range%2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"list",
                        "check":"Array"
                    }
                    ,
                    {
                        "type":"input_value",
                        "name":"range"

                    }
                ],
            "inputsInline":true,
            "nextStatement":null,
            "previousStatement":null,
            "colour":150,
            "tooltip":"Slices the List",
            "helpUrl":""
        },
        {
            "type":"slice_range",
            "message0":"%1 to %2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"r1",
                    },
                    {
                        "type":"input_value",
                        "name":"r2",
                    }
                ],
            "inputsInline":true,
            "output":"String",
            "colour":260,
            "tooltip":"The range of slicing",
            "helpUrl":""
        },
        {
            "type":"slice_list_output",
            "message0":"slice %1 in range%2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"list",
                        "check":"Array"
                    }
                    ,
                    {
                        "type":"input_value",
                        "name":"range"

                    }
                ],
            "inputsInline":true,
            "output":"Array",
            "colour":150,
            "tooltip":"Slices the List",
            "helpUrl":""
        },
        {
            "type":"find_palindrome",
            "message0":"find palindrome with %1 digits",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"digit",
                        "check":"Number"
                    }
                ],
            "output":"Array",
            "colour":50,
            "tooltip":"Finds the palindrome list of given digit",
            "helpUrl":""
        },
        {
            "type":"gcd",
            "message0":"gcd of %1 %2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"num1",
                        "check":"Number"
                    },
                    {
                        "type":"input_value",
                        "name":"num2",
                        "check":"Number"
                    }
                ],
            "inputsInline":true,
            "output":"Number",
            "colour":140,
            "tooltip":"Finds GCD of given numbers",
            "helpUrl":""
        },
        {
            "type":"lcm_part",
            "message0":"lcm of %1 %2",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"num1",
                        "check":"Number"
                    },
                    {
                        "type":"input_value",
                        "name":"num2",
                        "check":"Number"
                    }
                ],
            "inputsInline":true,
            "output":"Number",
            "colour":120,
            "tooltip":"Finds LCM of given numbers",
            "helpUrl":""
        },
        {
            "type":"abs",
            "message0":"absolute value of %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"num",
                        "check":"Number"
                    }
                ],
            "inputsInline":true,
            "output":"Number",
            "colour":100,
            "tooltip":"Returns the absolute value of given input",
            "helpUrl":""
        },
        {
            "type":"lcm_total",
            "message0":"lcm of all numbers smaller than %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"limit",
                        "check":"Number"
                    }
                ],
            "inputsInline":true,
            "output":"Number",
            "colour":80,
            "tooltip":"Finds of the lcm of all numbers under the given limit",
            "helpUrl":""
        },
        {
            "type":"sum_of_square",
            "message0":"sum of all squares of numbers under %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":110,
            "tooltip":"returns the sum  of the square of numbers smaller than given limit",
            "helpUrl":""
        },
        {
            "type":"square_of_sum",
            "message0":"square of sum  of number under %1",
            "args0":
                [
                    {
                        "type":"input_value",
                        "name":"num",
                        "check":"Number"
                    }
                ],
            "inputsInline":true,
            "output":"Number",
            "colour":100,
            "tooltip":"returns the square value  of the sum of numbers smaller than given limit",
            "helpUrl":""
        },
        {
            "type":"bool_dropdown",
            "message0":"%1",
            "args0":
                [
                {
                    "type":"field_dropdown",
                    "name":"property",
                    "options":
                        [
                            ["true", "true"],
                            ["false", "false"]
                        ]
                }
            ],
            "output":null,
            "colour":100,
            "tooltip":"",
            "helpUrl":""
        },
        {
            "type":"read_file",
            "message0":"open %1 in mode %2",
            "args0":[
                {
                    "type":"input_value",
                    "name":"file_name",
                    "check":"String"
                },
                {
                    "type":"field_dropdown",
                    "name":"mode",
                    "options":
                    [
                        [
                            "read","r"
                        ],
                        [
                            "write",'w'
                        ],
                        [
                            "append","a"
                        ]
                    ]
                }
            ],
            "inputsInline":true,
            "nextStatement":null,
            "previousStatement":null,
            "colour":180,
            "tooltip":"opens the file with given name in given mode",
            "helpUrl":""

        },
        {
            'type':"process_file",
            "message0":"process input file",
            "nextStatement":null,
            "previousStatement":null,
            "colour":30,
            "tooltip":"process the file to solve Euler_8 problem",
            "helpUrl":""
        },
        {
            "type":"calc_part",
            "message0":"calculate for %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":70,
            "tooltip":"executes partial multiplication of given number",
            "helpUrl":""
        },
        {
            "type":"find_max_mult",
            "message0":"find max mult.value in %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"input"
                }
            ],
            "output":"Number",
            'inputsInline':true,
            "colour": 50,
            "tooltip":"finds the largest among the list of partial multiplication results",
            "helpUrl":""
        },
        {
            "type":"read_line",
            "message0":"read file by line",
            "output":null,
            "colour":45,
            "tooltip":"read open file line by line",
            "helpUrl":""
        },
        {
            "type":"not",
            "message0":"not %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"input"
                }
            ],
            "output":null,
            "inputsInline":true,
            "colour":270,
            "tooltip":"",
            "helpUrl":""
        },
        {
            "type":"close_filestream",
            "message0":"close file",
            "nextStatement":null,
            "previousStatement":null,
            "colour":250,
            "tooltip":"close filestream",
            "helpUrl":""
        },
        {
            "type":"clear_list",
            "message0":"clear list %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"list",
                    "check":"Array"
                }
            ],
            "inputsInline":true,
            "nextStatement":null,
            "previousStatement":null,
            "colour":140,
            "tooltip":"clear given list",
            "helpUrl":""

        },
        {
            "type":"to_int",
            "message0":"%1 to int",
            "args0":[
                {
                    "type":"input_value",
                    "name":"input"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":10,
            "tooltip":"transform non-integers into integers",
            "helpUrl":""
        },
        {
            "type":"find_pytha",
            "message0":"find pythagorian number",
            "output":null,
            "colour":100,
            "tooltip":"find the list of pythagorian number that meets the condition",
            "helpUrl":""
        }
    ]
);

Blockly.print_custom_mutator_MIXIN={
    mutationToDom:function(){
        var container=document.createElement('mutation');
        var newInput=(this.getFieldValue('property')=='add');
        var removeInput=(this.getFieldValue('proterty')=='remove');
        container.setAttribute('new_input',newInput);
        container.setAttribute('remove_input',removeInput);
        return container;
    },
    domToMutation:function(xmlElement){
        var newInput=(xmlElement.getAttribute('new_input')=='true');
        var removeInput=(xmlElement.getAttribute('remove_input')=='true');
        this.updateShape_(newInput,removeInput);
    },
    updateShape_:function(newInput,removeInput){
        if(newInput){
            if(!removeInput){
                this.appendValueInput('inp'+(this.inputList.length-1));
                this.moveInputBefore('inp'+(this.inputList.length-2),'property');
            }
        }
        if(removeInput){
            if(!newInput){
                this.removeInput('inp'+(this.inputList.length-2));
            }

        }
    }
};

Blockly.PRINT_CUSTOM_MUTATOR_EXTENSION=function(){
    this.getField('property').setValidator(function(option){
        var newInput=(option=='add');
        var removeInput=(option=='remove');
        this.sourceBlock_.updateShape_(newInput,removeInput);
    });
};

Blockly.Extensions.registerMutator('print_custom_mutator',Blockly.print_custom_mutator_MIXIN,Blockly.PRINT_CUSTOM_MUTATOR_EXTENSION);