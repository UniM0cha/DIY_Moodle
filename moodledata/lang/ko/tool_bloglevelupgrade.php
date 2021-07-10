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
 * Strings for component 'tool_bloglevelupgrade', language 'ko', version '3.8'.
 *
 * @package     tool_bloglevelupgrade
 * @category    string
 * @copyright   1999 Martin Dougiamas and contributors
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['bloglevelupgradedescription'] = '<p>이 사이트는 최근에 Moodle 2.0으로 판올림 되었습니다.</p> <p>블로그 가시성이 2.0에서 간단하게 되었는데, 당신의 사이트는 아직 예전의 가시성 유형을 사용하고 있습니다. </p> <p>블로그 게시글에 대해 강좌 기반 혹은 모둠 기반 가시성을 유지하고자 하는 경우에 다음 업그레이드 스크립트를 실행하십시요.이 스크립트는 특별 "블로그" 유형의 포럼을 만들어 강좌에 등록된 사용자들이 블로그에 게시한 것을 이 특별 포럼의 블로그 게시글로 복사할 것입니다. </p> <p>블로그는 사이트 레벨에서 완전히 전환됩니다. 이 과정에서 어떤 블로그 게시글도 삭제되지 않습니다. </p> <p> <a href="{$a->fixurl}">블로그 레벨 업그에이드 페이지</a>를 방문하면 스크립트를 실행할 수 있습니다.</p>';
$string['bloglevelupgradeinfo'] = '블로그 가시성이 2.0에서 간단하게 되었습니다. 당신의 사이트는 아직 예전의 가시성 유형을 사용하고 있습니다. 당신의 사이트에 있는 블로그 게시글에 대해 강좌 기반 혹은 모둠 기반 가시성을 유지하기 위해서 다음 업그레이드 스크립트는 특별 "블로그" 유형의 포럼을 만들어 강좌에 등록된 사용자들이 블로그에 게시한 것을 이 특별 포럼의 블로그 게시글로 복사할 것입니다.블로그는 사이트 레벨에서 완전히 전환됩니다. 이 과정에서 어떤 블로그 게시글도 삭제되지 않습니다. ';
$string['bloglevelupgradeprogress'] = '변환 중 :  {$a->userscount} 사용자 검토, {$a->blogcount} 항목 변환됨.';
$string['pluginname'] = '블로그 보이기 판올림';
