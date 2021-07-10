<?php

class __Mustache_41e2bfaebba34c1fb87ec3f866c9251b extends Mustache_Template
{
    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $buffer = '';

        $value = $this->resolveValue($context->findDot('output.doctype'), $context);
        $buffer .= $indent . $value;
        $buffer .= '
';
        $buffer .= $indent . '<html ';
        $value = $this->resolveValue($context->findDot('output.htmlattributes'), $context);
        $buffer .= $value;
        $buffer .= '>
';
        $buffer .= $indent . '<head>
';
        $buffer .= $indent . '    <title>';
        $value = $this->resolveValue($context->findDot('output.page_title'), $context);
        $buffer .= $value;
        $buffer .= '</title>
';
        $buffer .= $indent . '    <link rel="shortcut icon" href="';
        $value = $this->resolveValue($context->findDot('output.favicon'), $context);
        $buffer .= $value;
        $buffer .= '" />
';
        $buffer .= $indent . '    ';
        $value = $this->resolveValue($context->findDot('output.standard_head_html'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '    <meta name="viewport" content="width=device-width, initial-scale=1.0">
';
        $buffer .= $indent . '    <style>
';
        $buffer .= $indent . '      h1 {font-family: comic sans; color: #000;}
';
        $buffer .= $indent . '      
';
        $buffer .= $indent . '      h2, h3 {
';
        $buffer .= $indent . '        font-family: \'Cafe24Ohsquare\'; }
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '      .fixed-top{background: #C4DEFF !important;}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '      .btn.nav-link{background: #C4DEFF !important;}
';
        $buffer .= $indent . '      #page-footer{
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '        display :none;
';
        $buffer .= $indent . '        }
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '        .img-fluid1{
';
        $buffer .= $indent . '            
';
        $buffer .= $indent . '            width: 5000px;
';
        $buffer .= $indent . '            height: 270px;
';
        $buffer .= $indent . '        }
';
        $buffer .= $indent . '        .img-fluid{
';
        $buffer .= $indent . '            display:none;
';
        $buffer .= $indent . '        }
';
        $buffer .= $indent . '    .contentTextTitle {
';
        $buffer .= $indent . '    width: 80%;
';
        $buffer .= $indent . '    margin-top: 5%;
';
        $buffer .= $indent . '    margin-bottom: 10%;
';
        $buffer .= $indent . '    display: flex;
';
        $buffer .= $indent . '    align-items: flex-end;
';
        $buffer .= $indent . '    justify-content: flex-end;
';
        $buffer .= $indent . '    }
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.contentText__warp {
';
        $buffer .= $indent . '    position: relative;
';
        $buffer .= $indent . '    width: 100%;
';
        $buffer .= $indent . '    max-width: 1200px;
';
        $buffer .= $indent . '    margin: 0 auto;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '    .cList {
';
        $buffer .= $indent . '            width: 100%;
';
        $buffer .= $indent . '            display: flex;
';
        $buffer .= $indent . '            height: 187px;
';
        $buffer .= $indent . '            align-items: center;
';
        $buffer .= $indent . '            justify-content: flex-start;
';
        $buffer .= $indent . '    }
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    .cList:nth-child(2n) {
';
        $buffer .= $indent . '    width: 100%;
';
        $buffer .= $indent . '    display: flex;
';
        $buffer .= $indent . '    flex-direction: row-reverse;
';
        $buffer .= $indent . '    justify-content: flex-start;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    .cList:not(:last-of-type) {
';
        $buffer .= $indent . '    border-bottom: 2px solid rgb(231, 231, 231);
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '        
';
        $buffer .= $indent . '    .cList:nth-child(2n) h3 {
';
        $buffer .= $indent . '    background: #9a36fe;
';
        $buffer .= $indent . '    color: #fff;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    .cList h3 {
';
        $buffer .= $indent . '    padding: 10px;
';
        $buffer .= $indent . '    background: #ffc000;
';
        $buffer .= $indent . '    border-radius: 10px;
';
        $buffer .= $indent . '    font-size: 20px;
';
        $buffer .= $indent . '    font-family: \'NaNumGothicCoding-Bold\';
';
        $buffer .= $indent . '    width: 212px;
';
        $buffer .= $indent . '    text-align: center;
';
        $buffer .= $indent . '    color: #fff;
';
        $buffer .= $indent . '    margin-bottom: 1%;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '@keyframes Homecontent {
';
        $buffer .= $indent . '    from {
';
        $buffer .= $indent . '        top: 0px;
';
        $buffer .= $indent . '    }
';
        $buffer .= $indent . '    to {
';
        $buffer .= $indent . '        top: 10px;
';
        $buffer .= $indent . '    }
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.Homecontent {
';
        $buffer .= $indent . '    animation: Homecontent 0.4s ease-in Infinite Alternate;
';
        $buffer .= $indent . '    
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    position: relative;
';
        $buffer .= $indent . '    max-width: 58%;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.cListIcon {
';
        $buffer .= $indent . '    box-shadow: 0 0 10px #e3e3e3;
';
        $buffer .= $indent . '    border-radius: 20px;
';
        $buffer .= $indent . '    vertical-align: top;
';
        $buffer .= $indent . '    background: #fff;
';
        $buffer .= $indent . '    width: 127px;
';
        $buffer .= $indent . '    height: 127px;
';
        $buffer .= $indent . '    position: relative;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.cListIcon > img {
';
        $buffer .= $indent . '    position: absolute;
';
        $buffer .= $indent . '    top: 50%;
';
        $buffer .= $indent . '    left: 50%;
';
        $buffer .= $indent . '    transform: translate(-50%, -50%);
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.cListText {
';
        $buffer .= $indent . '    margin-left: 2%;
';
        $buffer .= $indent . '    margin-right: 2%;
';
        $buffer .= $indent . '    font-size: 18px;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '.contentHomeContent {
';
        $buffer .= $indent . '    color: #fff;
';
        $buffer .= $indent . '    font-size: 30px;
';
        $buffer .= $indent . '    margin-top: 3%;
';
        $buffer .= $indent . '    line-height: 30px;
';
        $buffer .= $indent . '    box-sizing: border-box;
';
        $buffer .= $indent . '    margin: 0;
';
        $buffer .= $indent . '    padding: 0;
';
        $buffer .= $indent . '    border: 0;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '.contentHome__warp {
';
        $buffer .= $indent . '    position: relative;
';
        $buffer .= $indent . '    width: 100%;
';
        $buffer .= $indent . '    max-width: 1150px;
';
        $buffer .= $indent . '    margin: 0 auto;
';
        $buffer .= $indent . '    height:40%;
';
        $buffer .= $indent . '    display: flex;
';
        $buffer .= $indent . '    align-items: flex-start;
';
        $buffer .= $indent . '    flex-direction: column;
';
        $buffer .= $indent . '    justify-content: flex-end;
';
        $buffer .= $indent . '}
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    </style>
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '    <script>
';
        $buffer .= $indent . '       
';
        $buffer .= $indent . '        console.log(\'this is current path: \' + window.location.pathname)
';
        $buffer .= $indent . '        if(window.location.pathname == "/moodle/"){
';
        $buffer .= $indent . '            document.write("<style> div.d-flex.align-items-center{/* position: relative; */ width: 100%;height: 420px;/* padding-top: 180px; *//* padding-bottom: 18.5%; */background-image: url(/moodle/theme/boost/templates/main/head-bg.png);background-size: cover;background-repeat: no-repeat;background-position: top center;transition: all 1s;} </style>");
';
        $buffer .= $indent . ' 
';
        $buffer .= $indent . '            
';
        $buffer .= $indent . '                
';
        $buffer .= $indent . '            console.log(\'head css pathname: \' + window.location.pathname);
';
        $buffer .= $indent . '        }
';
        $buffer .= $indent . '    </script>
';
        $buffer .= $indent . '</head>';

        return $buffer;
    }
}
