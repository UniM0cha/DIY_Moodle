<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Strings for component 'tool_unittest', language 'ko', version '3.8'.
 *
 * @package     tool_unittest
 * @category    string
 * @copyright   1999 Martin Dougiamas and contributors
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['addconfigprefix'] = '설정파일에 접두어 추가';
$string['all'] = '모두';
$string['codecoverageanalysis'] = '코드 커버리지 분석 수행';
$string['codecoveragecompletereport'] = '(코드 커버리지 완료 보고서 보기)';
$string['codecoveragedisabled'] = '이 서버에서 코드 커버리지를 활성화 할 수 없습니다. (xdebig 익스텐션 없음)';
$string['codecoveragelatestdetails'] = '(일시 {$a->date}, {$a->files} 파일, {$a->percentage} 가 커버됨)';
$string['codecoveragelatestreport'] = '최근의 코드 커버리지 완료 보고서 보기';
$string['confignonwritable'] = '웹으로 config.php를 작성할 수 없습니다. 허가권을 변경하던지, 적절한 사용자 계정으로 이를 편집하고 마지막에 다음 줄과 같은 내용을 추가하십시오. <br />$CFG->unittestprefix = \'tst_\' // Change tst_ to a prefix of your choice, different from $CFG->prefix';
$string['coveredlines'] = '커버된 라인들';
$string['coveredpercentage'] = '전체적인 코드 커버 범위';
$string['dbtest'] = 'DB 기능 점검';
$string['deletingnoninsertedrecord'] = '유닛 점검에 포함되지 않은 기록( {$a->table} 테이블의 id {$a->id} )을 삭제하려고 합니다.';
$string['deletingnoninsertedrecords'] = '유닛 점검에 포함되지 않은 기록들( {$a->table} 테이블 )을 삭제하려고 합니다.';
$string['droptesttables'] = '점검 테이블 삭제';
$string['exception'] = '예외';
$string['executablelines'] = '예외 라인';
$string['fail'] = '실패';
$string['ignorefile'] = '파일에서 점검 무시';
$string['ignorethisfile'] = '이 테스트 파일을 무시하고 테스트 재 실행';
$string['installtesttables'] = '점검 테이블 설치';
$string['moodleunittests'] = '무들 유닛 점검 : {$a}';
$string['notice'] = '알림';
$string['onlytest'] = '다음 항목만 점검';
$string['othertestpages'] = '다른 테스트 페이지';
$string['pass'] = '통과';
$string['pathdoesnotexist'] = '{$a} 경로가 존재하지 않습니다.';
$string['pluginname'] = '유닛 점검';
$string['prefix'] = '유닛점검 테이블 접두어';
$string['prefixnotset'] = '유닛 점검 데이터베이스 테이블 접두어가 설정되지 않았습니다. config.php에 이를 추가하려면 양식을 채워 제출하시오.';
$string['reinstalltesttables'] = '점검 테이블 재설치';
$string['retest'] = '점검 재 시도';
$string['retestonlythisfile'] = '이 파일만 재 점검';
$string['runall'] = '모든 파일에 대해 점검';
$string['runat'] = '{$a} 에서 실행';
$string['runonlyfile'] = '이 파일에 대해서만 점검 실행';
$string['runonlyfolder'] = '본 폴더에 대해서만 점검 실행';
$string['runtests'] = '점검 실행';
$string['rununittests'] = '유닛 점검 실행';
$string['showpasses'] = '통과 및 실패 보기';
$string['showsearch'] = '점검 파일 검색결과 보기';
$string['skip'] = '건너뛰기';
$string['stacktrace'] = '스택 추적 :';
$string['summary'] = '{$a->run}/{$a->total} 사례 점검 완료 : <strong>{$a->passes}</strong>  통과, <strong>{$a->fails}</strong>  실패, <strong>{$a->exceptions}</strong> 가 제외 되었음.';
$string['tablesnotsetup'] = '유닛 점검 테이블이 아직 작성되지 않았습니다. 지금 만드시겠습니까?';
$string['testdboperations'] = '데이터베이스 동작 점검';
$string['testtablescsvfileunwritable'] = '점검 테이블의 CSV파일에 쓸 수 없음({$a->filename})';
$string['testtablesneedupgrade'] = '점검 DB 테이블을 업그레이드 해야 합니다. 지금 업그레이드 하겠습니까?';
$string['testtablesok'] = '점검하려는 DB 테이블 설치 성공';
$string['thorough'] = '상세 점검(느릴 수 있음)';
$string['timetakes'] = '소요 시간: {$a} ';
$string['totallines'] = '총 라인 수';
$string['uncaughtexception'] = '[{$a->getFile()}:{$a->getLine()}] 에서 잡히지 않은 예외 [{$a->getMessage()}] 점검이 취소됨.';
$string['uncoveredlines'] = '커버되지 않은 라인들';
$string['unittest:execute'] = '유닛 점검 실행';
$string['unittestprefixsetting'] = '유닛 점검 접두어: <strong>{$a->unittestprefix}</strong> (이를 변경하려면 config.php를 수정).';
$string['unittests'] = '유닛 점검';
$string['updatingnoninsertedrecord'] = '유닛 점검에 포함되지 않은 기록( {$a->table} 테이블의 id {$a->id} )을 업데이트하려고 합니다.';
$string['version'] = '<a href="http://sourceforge.net/projects/simpletest/">SimpleTest</a> version {$a} 를 사용중임.';
