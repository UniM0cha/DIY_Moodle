
//numpy_order_static
Blockly.Blocks['numpy_order_static'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 순서]")
        .appendField(new Blockly.FieldDropdown([["배열최소값(amin)","numpy_order_static_amin"], ["배열최대값(amax)","numpy_order_static_amax"], ["Nan제외최소값(nanmin)","numpy_order_static_nMin"], ["Nan제외최대값(nanmax)","numpy_order_static_nMax"], ["축에따른범위(ptp)","numpy_order_static_ptp"], ["백분위수(percentile)","numpy_order_static_percentile"], ["Nan제외백분위수(nanpercentile)","numpy_order_static_nanpercentile"], ["분위수(quantile)","numpy_order_static_quantile"], ["Nan백분위수(nanquantile)","numpy_order_static_nanquantile"]]), "numpy_order_static_opt");
    this.appendValueInput("numpy_order_static_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl(""); 
  }
};

//numpy_averages_variances
Blockly.Blocks['numpy_averages_variances'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 평균&분산]")
        .appendField(new Blockly.FieldDropdown([["산술평균(mean)","np.mean"],["가중평균(average)","np.average"],["중앙값(median)","np.median"],  ["표준편차(std)","np.std"], ["분산(var)","np.var"]]), "numpy_Averages_variances_opt");
    this.appendValueInput("numpy_Averages_variances_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_correlating
Blockly.Blocks['numpy_correlating'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 상관]")
        .appendField(new Blockly.FieldDropdown([["상관계수(corrcoef)","numpy_Correlating_corrcoef"], ["2개시퀸스상호상관(correlate)","numpy_Correlating_correlate"], ["가중치에따른공분산(cov)","numpy_Correlating_cov"]]), "numpy_Correlating_opt");
    this.appendValueInput("numpy_Correlating_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_sorting
Blockly.Blocks['numpy_sorting'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 정렬]")
        .appendField(new Blockly.FieldDropdown([["정렬(sort)","numpy_Sorting_sort"],["배열정렬(argsort)","numpy_Sorting_argsort"], ["간접 정렬(lexsort)","numpy_Sorting_lexsort"], ["분할(partition)","numpy_Sorting_partition"],["데이터분할(quantile)","numpy_Sorting_quantile"], ["간접 분할(argpartition)","numpy_Sorting_argpartition"]]), "numpy_Sorting_opt");
    this.appendValueInput("numpy_Sorting_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  } 
};

//numpy_searching
Blockly.Blocks['numpy_searching'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 검색]")
        .appendField(new Blockly.FieldDropdown([["최대값 인덱스(argmax)","numpy_argmax"], ["최소값 인덱스(argmin)","numpy_Sorting_argmin"], ["0 아닌 인덱스(nonzero)","numpy_Searching_nonzero"], ["조건 요소(where)","numpy_Searching_where"], ["조건 만족(extract)","numpy_Searching_extract"]]), "numpy_Searching_opt");
    this.appendValueInput("numpy_Searching")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_random_sample
Blockly.Blocks['numpy_random_sample'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 단순 랜덤]")
        .appendField(new Blockly.FieldDropdown([["임의 값(rand)","numpy_Random_sample_rand"], ["표준 정규분포(randn)","numpy_Random_sample_randn"], ["임의 정수(randint)","numpy_Random_sample_randint"], ["0~1 부동 소수점(random)","numpy_Random_sample_random"], ["배열 무작위(choice)","numpy_Random_sample_choice"], ["임의 바이트(bytes)","numpy_Random_sample_bytes"]]), "numpy_Random_sample_opt");
    this.appendValueInput("numpy_Random_sample_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_permutations
Blockly.Blocks['numpy_random_permutations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 순열]")
        .appendField(new Blockly.FieldDropdown([["섞기(shuffle)","numpy_Random_Permutations_shuffle"], ["무작위 치환(permutation)","numpy_Random_Permutations_permutation"]]), "numpy_Random_Permutations_opt");
    this.appendValueInput("numpy_Random_Permutations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_distributions
Blockly.Blocks['numpy_random_distributions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 분포1]")
        .appendField(new Blockly.FieldDropdown([["이항 분포(binomial)","numpy_Random_Distributions_binomial"], ["카이제곱 분포(chisquare)","numpy_Random_Distributions_chisquare"], ["Dirichlet 분포(dirichlet)","numpy_Random_Distributions_dirichlet"], ["지수 분포(exponential)","numpy_Random_Distributions_exponential"], ["F 분포(f)","numpy_Random_Distributions_f"], ["감마 분포(gamma)","numpy_Random_Distributions_gamma"], ["기하학적 분포(geometric)","numpy_Random_Distributions_geometric"], ["Gumbel 분포(gumbel)","numpy_Random_Distributions_gumbel"], ["초기 하 분포(hypergeometric)","numpy_Random_Distributions_hypergeometric"], ["표본 추출(laplace)","numpy_Random_Distributions_laplace"], ["로지스틱 분포(logistic)","numpy_Random_Distributions_logistic"]]), "numpy_Random_Distributions_opt");
    this.appendValueInput("numpy_Random_Distributions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl(""); 
  }
};

//numpy_random_distributions_two
Blockly.Blocks['numpy_random_distributions_two'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 분포2]")
        .appendField(new Blockly.FieldDropdown([["로그 정규 분포(lognormal)","numpy_Random_Distributions_two_lognormal"], ["대수 계열 분포(logseries)","numpy_Random_Distributions_two_logseries"], ["다항 분포(multinomial)","numpy_Random_Distributions_two_multinomial"], ["다변량 정규 분포(multivariate_normal)","numpy_Random_Distributions_two_multivariate_normal"], ["음 이항 분포(negative_binomial)","numpy_Random_Distributions_two_negative_binomial"], ["비중심 카이제곱 분포(noncentral_chisquare)","numpy_Random_Distributions_two_noncentral_chisquare"], ["비 중심 F분포(noncentral_f)","numpy_Random_Distributions_two_noncentral_f"], ["가우스 분포(normal)","numpy_Random_Distributions_two_normal"], ["포아송 분포(poisson)","numpy_Random_Distributions_two_poisson"], ["Rayleigh 분포(rayleigh)","numpy_Random_Distributions_two_rayleigh"], ["표본 지수 분포(standard_exponential)","numpy_Random_Distributions_two_standard_exponential"]]), "numpy_Random_Distributions_two_opt");
    this.appendValueInput("numpy_Random_Distributions_two_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_distributions_third
Blockly.Blocks['numpy_random_distributions_third'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 분포3]")
        .appendField(new Blockly.FieldDropdown([["표준 감마 분포(standard_gamma)","standard_gamma"], ["표준 정규 분포(standard_normal)","standard_normal"], ["삼각 분포(triangular)","triangular"], ["균일 분포(uniform)","uniform"], ["폰 미제스 분포(vonmises)","vonmises"], ["역가우스 분포(wald)","wald"], ["Weibull 분포(weibull)","weibull"], ["Zipf 분포(zipf)","zipf"]]), "DROP");
    this.appendValueInput("VAR")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_random_generator
Blockly.Blocks['numpy_random_generator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 생성기]")
        .appendField(new Blockly.FieldDropdown([["규칙 난수(seed)","numpy_Random_generator_seed"], ["생성기 내부 상태(get_state)","numpy_Random_generator_get_state"], ["튜플 내부상태 설정(set_state)","numpy_Random_generator_set_state"]]), "numpy_Random_generator_opt");
    this.appendValueInput("numpy_Random_generator_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_mathematical_functions
Blockly.Blocks['numpy_mathematical_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 삼각]")
        .appendField(new Blockly.FieldDropdown([["사인(sin)","np.sin"], ["코사인(cos)","np.cos"], ["탄젠트(tan)","np.tan"], ["역 사인(arcsin)","np.arcsin"], ["역 코사인(arccos)","np.arccos"], ["역 탄젠트(arctan)","np.arctan"], ["라디안->도(degrees)","np.degrees"], ["도->라디안(radians)","np.radians"]]), "numpy_Mathematical functions_opt");
    this.appendValueInput("numpy_Mathematical functions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_mathematical_functions
Blockly.Blocks['numpy_hyperbolic_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 쌍곡선]")
        .appendField(new Blockly.FieldDropdown([["쌍곡사인(signh)","np.signh"], ["쌍곡코사인(cosh)","np.cosh"], ["쌍곡탄젠트(tanh)","np.tanh"], ["역쌍곡사인(arcsinh)","np.arcsinh"], ["역쌍곡코사인(arccosh)","np.arccosh"], ["역쌍곡탄젠트(arctanh)","np.arctanh"]]), "numpy_Hyperbolic functions_opt");
    this.appendValueInput("numpy_Hyperbolic functions_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_rounding
Blockly.Blocks['numpy_rounding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 반올림]")
        .appendField(new Blockly.FieldDropdown([["소수자릿수(around)","np.around"], ["배열소수자릿수(round_)","np.round_"], ["가까운배열정수(rint)","np.rint"], ["0인접정수(fix)","np.fix"],["올림(ceil)","np.ceil"],["내림(floor)","np.floor"], ["소수점제외(trunc)","np.trunc"]]), "numpy_Rounding_opt");
    this.appendValueInput("numpy_Rounding_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_exponents_logarithms
Blockly.Blocks['numpy_exponents_logarithms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 지수&로그]")
        .appendField(new Blockly.FieldDropdown([["요소별지수(exp)","np.exp"], ["요소별지수2(exp2)","np.exp2"], ["요소별자연로그(log)","np.log"], ["요소별로그10(log10)","np.log10"], ["요소별로그2(log2)","np.log2"]]), "numpy_Exponents_logarithms_opt");
    this.appendValueInput("numpy_Exponents_logarithms_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_arithmetic_operations1
Blockly.Blocks['numpy_arithmetic_operations1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 기본 산술]")
        .appendField(new Blockly.FieldDropdown([["요소별덧셈(add)","np.add"],
                                                ["요소별뺄셈(subtract)","np.subtract"],
                                                ["요소별곱셈(multiply)","np.multiply"],
                                                ["요소별나눗셈(divide)","np.divide"],
                                                ["요소별제곱근(sqrt)","np.sqrt"],
                                                ["요소별양수(positive)","np.positive"],
                                                ["요소별음수(negative)","np.negative"],
                                                ["요소별역수(reciprocal)","np.reciprocal"]]), "numpy_Arithmetic_operations_opt");
    this.appendValueInput("numpy_Arithmetic_operations1_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_arithmetic_operations2
Blockly.Blocks['numpy_arithmetic_operations2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 심화 산술]")
        .appendField(new Blockly.FieldDropdown([["요소별거듭제곱(power)","np.power"], ["요소별나머지(remainder)","np.remainder"], ["요소별소수&정수(modf)","np.modf"], ["요소별몫&나머지(divmod)","np.divmod"]]), "numpy_Arithmetic_operations2_opt");
    this.appendValueInput("numpy_Arithmetic_operations2_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_handling_complex_numbers
Blockly.Blocks['numpy_handling_complex_numbers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 복소수]")
        .appendField(new Blockly.FieldDropdown([["실수(real)","np.real"], ["허수(imag)","np.imag"], ["켤레복소수(conj)","np.conj"]]), "numpy_Handling complex numbers_opt");
    this.appendValueInput("numpy_Handling complex numbers_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_sums_differences
Blockly.Blocks['numpy_sums_differences'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 합계&차이]")
        .appendField(new Blockly.FieldDropdown([ ["배열합계(sum)","np.sum"],["배열곱(prod)","np.prod"], ["누적곱(cumprod)","np.cumprod"], ["누적합계(cumsum)","np.cumsum"], ["이산차이(diff)","np.diff"], ["N차원배열기울기(gradient)","np.gradient"], ["두배열의외적(cross)","np.cross"], ["적분(trapz)","np.trapz"]]), "numpy_Sums_differences_opt");
    this.appendValueInput("numpy_Sums_differences_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_matrix_vector_products
Blockly.Blocks['numpy_matrix_vector_products'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 행렬&벡터]")
        .appendField(new Blockly.FieldDropdown([["두배열내적(dot)","np.dot"], ["두벡터내적(vdot)","np.vdot"], ["두벡터외적(outer)","np.outer"], ["두배열행렬곱(matmul)","np.matmul"], ["두배열크로네커곱(kron)","np.kron"]]), "numpy_Matrix_vector_products_opt");
    this.appendValueInput("numpy_Matrix_vector_products_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//numpy_matrix_decomposition
Blockly.Blocks['numpy_matrix_decomposition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 분해]")
        .appendField(new Blockly.FieldDropdown([["qr분해(linalg.qr)","np.linalg.qr"], ["특이값분해(linalg.svd)","np.linalg.svd"], ["촐레스키(linalg.cholesky)","np.linalg.cholesky"]]), "numpy_Matrix_Decomposition_opt");
    this.appendValueInput("numpy_Matrix_Decomposition_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_array_contents
Blockly.Blocks['numpy_array_contents'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 극한]")
        .appendField(new Blockly.FieldDropdown([["유한성체크(isfinite)","np.isfinite"], ["양무한체크(isposinf)","np.isposinf"], ["음수무한체크(isneginf)","np.isneginf"], ["양/음수무한체크(isinf)","np.isinf"]]), "numpy_Array_contents_opt");
    this.appendValueInput("numpy_Array_contents_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpy_comparison
Blockly.Blocks['numpy_comparison'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 비교]")
        .appendField(new Blockly.FieldDropdown([["허용오차(allclose)","np.allclose"], ["허용오차내동일논리(isclose)","np.isclose"], ["모양&요소체크(array_equal)","np.array_equal"], ["배열형태&요소체크(array_equiv)","np.array_equiv"], ["x1>x2체크(greater)","np.greater"], ["x1>=x2체크(greater_equal)","np.greater_equal"], ["x1<x2체크(less)","np.less"], ["x1<=x2체크(less_equal)","np.less_equal"], ["x1==x2체크(equal)","np.equal"], ["x1!=x2체크(not_equal)","np.not_equal"]]), "numpy_Comparison_opt");
    this.appendValueInput("numpy_Comparison_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_string_operations
Blockly.Blocks['numpy_string_operations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 문자 연산1]")
        .appendField(new Blockly.FieldDropdown([["연결(char.add)","np.char.add"],
                                                ["다중연결(char.multiply)","np.char.multiply"],
                                                ["첫문자대문자로(char.capitalize)","np.char.capitalize"],
                                                ["문자열 중심 복사(char.center)","np.char.center"],
                                                ["소문자로(char.lower)","np.char.lower"], 
                                                ["대문자로(char.upper)","np.char.upper"], 
                                                ["선행문자제거(char.lstrip)","np.char.lstrip"]]), "numpy_String_operations_opt");
    this.appendValueInput("numpy_String_operations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_string_operations2
Blockly.Blocks['numpy_string_operations2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 문자 연산2]")
        .appendField(new Blockly.FieldDropdown([["대체(char.replace)","np.char.replace"], 
                                                ["왼쪽정렬(char.ljust)","np.char.ljust"], 
                                                ["오른쪽정렬(char.rjust)","np.char.rjust"], 
                                                ["구분자분할(char.split)","np.char.split"], 
                                                ["선행또는후행문자제거(char.strip)","np.char.strip"], 
                                                ["0으로채움(char.zfill)","np.char.zfill"]]), "numpy_String_operations2_opt");
    this.appendValueInput("numpy_String_operations2_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//numpystring_information
Blockly.Blocks['numpystring_information'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 문자 정보]")
        .appendField(new Blockly.FieldDropdown([["특정문자갯수확인(char.count)","np.char.count"], 
                                                ["가장낮은인덱스(char.find)","np.char.find"], 
                                                ["알파벳체크(char.isalpha)","np.char.isalpha"], 
                                                ["10진수체크(char.isdecimal)","np.char.isdecimal"], 
                                                ["숫자체크(char.isdigit)","np.char.isdigit"], 
                                                ["소문자체크(char.islower)","(np.char.islower"], 
                                                ["대문자체크(char.isupper)","np.char.isupper"], 
                                                ["모든요소숫자체크(char.isnumeric)","np.char.isnumeric"], 
                                                ["공백체크(char.isspace)","np.char.isspace"]]), "numpyString_information_opt");
    this.appendValueInput("numpyString_information_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_array_shape
Blockly.Blocks['numpy_changing_array_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 차원변경]")
        .appendField(new Blockly.FieldDropdown([["배열형태 변경(reshape)","np.reshape"], //["1차원변경(ravel)","np.ravel"],
           ["1차원변경(flatten)","np.flatten"], ["1차원씩 항목제거(squeeze)","np.squeeze"]]), "numpy_Changing_array_shape_opt");
    this.appendValueInput("numpy_Changing_array_shape_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_transpose_like_operations
Blockly.Blocks['numpy_transpose_like_operations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 전치]")
        .appendField(new Blockly.FieldDropdown([ ["행렬 전치 (np.transpose)","np.transpose"],["새 위치 이동 (np.moveaxis)","np.moveaxis"], ["배열 축 교환 (np.swapaxes)","np.swapaxes"]]), "numpy_Transpose_like_operations_opt");
    this.appendValueInput("numpy_Transpose_like_operations_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_number
Blockly.Blocks['numpy_changing_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 차원수 변경]")
        .appendField(new Blockly.FieldDropdown([["최소 1차원배열(atleast_1d)","np.atleast_1d"], ["최소 2차원배열(atleast_2d)","np.atleast_2d"], ["최소 3차원배열(atleast_3d)","np.atleast_3d"], ["1차원 항목제거(squeeze)","np.squeeze"]]), "numpy_Changing_number_opt");
    this.appendValueInput("numpy_Changing_number_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_changing_kind_array 
Blockly.Blocks['numpy_changing_kind_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 종류변경]")
        .appendField(new Blockly.FieldDropdown([["입력을 배열로(asarray)","np.asarray"], ["입력을 행렬로(asmatrix)","np.asmatrix"], ["Folat 유형으로(asfarray)","np.asfarray"], ["배열변환 & Nan확인(asarray_chkfinite)","np.asarray_chkfinite"]]), "numpy_Changing_kind_array_opt");
    this.appendValueInput("numpy_Changing_kind_array_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_joining_arrays
Blockly.Blocks['numpy_joining_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 결합]")
        .appendField(new Blockly.FieldDropdown([["기존축 배열(concatenate)","np.concatenate"], ["새축 배열(stack)","np.stack"], ["1차원->2차원(열) (column_stack)","np.column_stack"]]), "numpy_Joining_arrays_opt");
    this.appendValueInput("numpy_Joining_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_splitting_arrays
Blockly.Blocks['numpy_splitting_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 분할]")
        .appendField(new Blockly.FieldDropdown([["여러 하위배열(split)","np.split"], ["하위배열 가로(hsplit)","np.hsplit"], ["하위배열 세로(vsplit)","np.vsplit"]]), "numpy_Splitting_arrays_opt");
    this.appendValueInput("numpy_Splitting_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_adding_removing_elements
Blockly.Blocks['numpy_adding_removing_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 추가&제거]")
        .appendField(new Blockly.FieldDropdown([["배열 끝 삽입(append)","np.append"], ["인덱스 앞 삽입(insert)","np.insert"],   ["하위배열 삭제(delete)","np.delete"],["고유요소 찾기(unique)","np.unique"],["지정 모양(resize)","np.resize"]]), "numpy_Adding_removing_elements_opt");
    this.appendValueInput("numpy_Adding_removing_elements_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_adding_removing_elements
Blockly.Blocks['numpy_rearranging_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 재정렬]")
        .appendField(new Blockly.FieldDropdown([["요소순서 반대(flip)","np.flip"], ["좌/우 뒤집기(fliplr)","np.fliplr"], ["상/하 뒤집기(flipud)","np.flipud"], ["새 배열(데이터 변경x)(reshape)","np.reshape"], ["축에 따른 이동(roll)","np.roll"]]), "numpy_Rearranging_elements_opt");
    this.appendValueInput("numpy_Rearranging_elements_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_ones_and_zeros
Blockly.Blocks['numpy_ones_and_zeros'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 0 & 1]")
        .appendField(new Blockly.FieldDropdown([["0으로 채움(zeros)","np.zeros"],["초기화 x(empty)","np.empty"],  ["형태에 따른 1(ones)","np.ones"], ["대각선 1(eye)","np.eye"], ["식별 배열(identity)","np.identity"], ["해당 값으로 채움(full)","np.full"]]), "numpy_Ones and zeros_opt");
    this.appendValueInput("numpy_Ones and zeros_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_from_existing_data
Blockly.Blocks['numpy_from_existing_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 기존 데이터]")
        .appendField(new Blockly.FieldDropdown([["복사(copy)","np.copy"], ["배열생성(array)","np.array"], ["입력된 배열(asarray)","np.asarray"], ["입력을 행렬(asmatrix)","np.asmatrix"],  ["버퍼를 1차원(frombuffer)","np.frombuffer"], ["텍스트 파일로드(loadtxt)","np.loadtxt"]]), "numpy_From_existing_data_opt");
    this.appendValueInput("numpy_From_existing_data_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_creating_record_arrays
Blockly.Blocks['numpy_creating_record_arrays'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 레코드]")
        .appendField(new Blockly.FieldDropdown([["레코드 배열 구성(core.records.array)","np.core.records.array"], ["텍스트 레코드->Recarray(core.records.fromrecords)","np.core.records.fromrecords"], ["이진 레코드(core.records.fromstring)","np.core.records.fromstring"]]), "numpy_Creating_record_arrays_opt");
    this.appendValueInput("numpy_Creating_record_arrays_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_numerical_ranges
Blockly.Blocks['numpy_numerical_ranges'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 숫자 범위]")
        .appendField(new Blockly.FieldDropdown([["균일 간격 배열(arange)","np.arange"], ["균등 간격(linspace)","np.linspace"], ["로그 균등 간격(logspace)","np.logspace"], ["좌표 행렬(meshgrid)","np.meshgrid"], ["고밀도 다차원(mgrid)","np.mgrid"], ["열린 다차원(ogrid)","np.ogrid"]]), "numpy_Numerical_ranges_opt");
    this.appendValueInput("numpy_Numerical_ranges_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//numpy_building_matrices
Blockly.Blocks['numpy_building_matrices'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 행렬]")
        .appendField(new Blockly.FieldDropdown([["대각선 배열(diag)","np.diag"], ["평면 2차원 대각선(diagflat)","np.diagflat"], ["대각선1 나머지0(tri)","np.tri"], ["아래쪽 삼각형(tril)","np.tril"], ["위쪽 삼각형(triu)","np.triu"], ["Vandermonde 행렬(vander)","np.vander"]]), "numpy_Building_matrices_opt");
    this.appendValueInput("numpy_Building_matrices_val")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['create_np_array'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("a"), "list")
          .appendField(" = np.array(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendValueInput("dtype")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['create_np_array2'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("a"), "list")
          .appendField(" = np.array(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[");
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("])");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};