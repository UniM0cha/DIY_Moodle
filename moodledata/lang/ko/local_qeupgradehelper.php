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
 * Strings for component 'local_qeupgradehelper', language 'ko', version '3.8'.
 *
 * @package     local_qeupgradehelper
 * @category    string
 * @copyright   1999 Martin Dougiamas and contributors
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['action'] = '행동';
$string['alreadydone'] = '모든것이 이미 변환되었습니다.';
$string['areyousure'] = '확실합니까?';
$string['areyousuremessage'] = '강좌 {$a->shortname}의 퀴즈 \'{$a->name} 에서 모든 {$a->numtoconvert} 시도들을 업그레이드하고자 합니까 ?';
$string['areyousureresetmessage'] = '강좌  {$a->shortname}의 퀴즈 \'{$a->name}\'에는 {$a->totalattempts} 시도가 있습니다. 그 중 {$a->convertedattempts}는 이전시스템에서 업그레이드 되었습니다. 물론 그 중 {$a->resettableattempts}는 추후 재변환을 위해 원래 상태로 되돌릴 수 있습니다. 계속하시겠습니까?';
$string['attemptstoconvert'] = '변환이 필요한 시도';
$string['backtoindex'] = '메인 페이지로 돌아가기';
$string['conversioncomplete'] = '변환 완료';
$string['convertattempts'] = '시도 변환';
$string['convertedattempts'] = '변환된 시도들';
$string['convertquiz'] = '시도 변환';
$string['cronenabled'] = '크론 활성화';
$string['cronprocesingtime'] = '크론 실행 처리 시간';
$string['cronsetup'] = '크론 설정';
$string['cronsetup_desc'] = '자동으로 퀴즈 시도 데이터의 업그레이드를 완료하기 위해 크론을 구성할 수 있습니다.';
$string['cronstarthour'] = '시작 시간';
$string['cronstophour'] = '종료 시간';
$string['extracttestcase'] = '테스트 케이스 추출';
$string['extracttestcase_desc'] = '업그레이드를 테스트하는데 사용할 수 있는 단위 테스트를 만들 수 있도록 데이터베이스에서 예제 데이터를 사용합니다.';
$string['gotoindex'] = '업그레이드할 수 있는 퀴즈 목록으로 돌아가기';
$string['gotoquizreport'] = '업그레이드를 확인하기 위해 이 퀴즈 보고서로 가기';
$string['gotoresetlink'] = '초기화할 수 있는 퀴즈 목록으로 가기';
$string['includedintheupgrade'] = '업그레이드에 포함되었습니까?';
$string['invalidquizid'] = '잘못된 퀴즈 id. 퀴즈가 존재하지 않거나 변환 시도가 없습니다.';
$string['listpreupgrade'] = '퀴즈와 시도들을 열거';
$string['listpreupgrade_desc'] = '시스템에 있는 모든 퀴즈와 몇 번의 시도들이 있는지에 대한 보고서를 보여줍니다. 수행하여야 할 업그레이드의 범위에 대해 알 수 있을 것입니다.';
$string['listpreupgradeintro'] = '사이트를 업그레이드할 때 처리해야 할 퀴즈 시도들의 수 입니다. 수 만개 정도는 문제가 안됩니다. 그 이상의 경우 업그레이드 하는데 얼마나 시간이 걸릴지 생각해 볼 필요가 있습니다.';
$string['listtodo'] = '업그레이드해야 할 퀴즈 목록';
$string['listtodo_desc'] = '시스템 상에서 새 질문엔진으로 업그레이드가 필요한 시도들이 있는  퀴즈들에 대한 보고서를 보여줍니다.';
$string['listtodointro'] = '변환이 필요한 시도 데이터가 있는 퀴즈들입니다. 링크를 클릭하여 시도들을 변환할 수 있습니다.';
$string['listupgraded'] = '원래대로 할 수 있는 업그레이드된 퀴즈 목록';
$string['listupgraded_desc'] = '시스템 상에서 시도가 업그레이드 되어 있고, 기존 데이터가 남아있어서 업그레이드를 되돌리거나 다시 할 수 있는 퀴즈들에 대해 보고서를 보여줍니다.';
$string['listupgradedintro'] = '이것들은 시도가 업그레이드 되어 있고, 기존 데이터가 남아있어서 업그레이드를 되돌리거나 다시 업그레이드 할 수 있는 퀴즈들 입니다.';
$string['noquizattempts'] = '사이트에 퀴즈 시도가 전혀 없습니다.';
$string['nothingupgradedyet'] = '원래대로 할 수 있는 업그레이드된 시도가 없습니다.';
$string['notupgradedsiterequired'] = '이 스크립트는 사이트가 업그레이드하지 전에만 동작합니다.';
$string['numberofattempts'] = '퀴즈 시도 횟수';
$string['oldsitedetected'] = '새로운 질문 엔진을 포함하도록 업그레이드 되지 않은 사이트 같습니다.';
$string['outof'] = '{$a->total} 중 {$a->some}';
$string['pluginname'] = '질문 엔진 업그레이드 도우미';
$string['pretendupgrade'] = '시도 업그레이드 가상 실행';
$string['pretendupgrade_desc'] = '업그레이드는 3가지 작업을 합니다. 데이터베이스에서 기존 데이터를 로드하고, 변환하고, 변환된 데이터를 데이터베이스에 쓰는 작업을 합니다. 이 스크립트는 이 과정에서 처음 두 부분을 검증합니다.';
$string['questionsessions'] = '질문 세션';
$string['quizid'] = '퀴즈 id';
$string['quizupgrade'] = '퀴즈 업그레이드 상태';
$string['quizzesthatcanbereset'] = '다음 퀴즈들은 초기화할 수 있는 변환된 시도들을 포함하고 있습니다.';
$string['quizzestobeupgraded'] = '시도가 있는 모든 퀴즈들';
$string['quizzeswithunconverted'] = '다음 퀴즈들은 변환이 필요한 시도들을 포함하고 있습니다.';
$string['resetcomplete'] = '초기화 완료';
$string['resetquiz'] = '시도 초기화';
$string['resettingquizattempts'] = '퀴즈 시도 초기화 중';
$string['resettingquizattemptsprogress'] = '시도 초기화 {$a->done} / {$a->outof}';
$string['upgradedsitedetected'] = '새로운 질문 엔진을 포함하도록 업그레이드 된 사이트 같습니다.';
$string['upgradedsiterequired'] = '이 스크립트는 사이트가 업그레이드된 후에 동작합니다.';
$string['upgradingquizattempts'] = '강좌 {$a->shortname}의 퀴즈 \'{$a->name}\'에 대한 시도 업그레이드';
