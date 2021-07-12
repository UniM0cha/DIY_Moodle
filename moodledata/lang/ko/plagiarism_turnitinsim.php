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
 * Strings for component 'plagiarism_turnitinsim', language 'ko', version '3.8'.
 *
 * @package     plagiarism_turnitinsim
 * @category    string
 * @copyright   1999 Martin Dougiamas and contributors
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$string['accessoptions'] = '학생 액세스';
$string['accessoptions_help'] = '제출물에 대한 유사성 보고서가 생성된 후 학생이 해당 보고서에 액세스할 수 있습니다.';
$string['accessstudents'] = '학생이 유사성 보고서를 보도록 허용';
$string['addtoindex'] = '모든 제출물 인덱싱';
$string['code'] = '코드';
$string['connecttest'] = 'Turnitin 연결 테스트';
$string['connecttestfailed'] = '연결 테스트에 실패했습니다.';
$string['connecttestsuccess'] = '연결 테스트 성공';
$string['dbexport'] = '데이터베이스 내보내기';
$string['dbexporttable'] = '{$a} 데이터 내보내기';
$string['defaultsettings'] = '기본 설정';
$string['errorenabledfeatures'] = '지원 기능 목록을 가져올 수 없습니다.';
$string['errorgettingsubmissioninfo'] = '제출물 정보를 가져오는 동안 오류가 발생했습니다.';
$string['errorprocessingdeletedsubmission'] = '이 제출물은 삭제된 과제에 속하므로 처리할 수 없습니다.';
$string['errortoolarge'] = '이 파일은 최대 허용 크기({$a})를 초과하므로 Turnitin에 제출되지 않습니다.';
$string['eulaaccept'] = 'Turnitin EULA에 동의';
$string['eulaaccepted'] = '새로운 Turnitin EULA에 동의해 주셔서 검사합니다. 이제 모든 향후 제출물이 처리를 위해 Turnitin에 전송됩니다.';
$string['eulaalreadyaccepted'] = '최신 Turnitin EULA에 이미 동의하셨습니다.';
$string['euladecline'] = 'Turnitin EULA 거부';
$string['euladeclined'] = 'Turnitin 최종 사용자 라이센스 계약에 동의하지 않았으므로 제출물이 Turnitin에 전송되지 않습니다.';
$string['eulaheader'] = 'Turnitin 최종 사용자 라이센스 계약';
$string['eulalink'] = '이 제출물을 Turnitin에 전송하려면 <a href="{$a}" target="_blank">Turnitin 최종 사용자 라이센스 계약</a>에 동의해야 합니다.';
$string['eulalinkgeneric'] = '향후 제출물을 Turnitin에 전송하려면 <a href="{$a}" target="_blank">Turnitin 최종 사용자 라이센스 계약</a>에 동의해야 합니다.';
$string['eulalinkmodal'] = '이 제출물을 Turnitin에 전송하려면 <a href="#" class="eula_link">Turnitin 최종 사용자 라이센스 계약</a>에 동의해야 합니다.';
$string['eulanotrequired'] = 'Turnitin EULA에 동의할 필요가 없습니다.';
$string['excludebiblio'] = '참고 문헌';
$string['excludeoptions'] = '유사성 보고서에서 제외';
$string['excludeoptions_help'] = '선택한 옵션은 유사성 보고서에서 일치 항목으로 표시되지 않습니다.';
$string['excludequotes'] = '인용문';
$string['faultcode'] = '장애 코드';
$string['getwebhookfailure:message'] = 'Turnitin에 Plagiarism 플러그인용으로 등록한 웹후크에 문제가 있을 수 있습니다. 이를 확인하기 위한 예약된 작업에서 Turnitin에 연결하지 못했습니다. 로그를 확인하십시오.';
$string['getwebhookfailure:subject'] = 'Turnitin 웹후크 검사 실패';
$string['indexoptions'] = '제출물 인덱싱 중';
$string['indexoptions_help'] = '인덱싱된 제출물을 유사성 보고서에서 비교에 사용할 수 있습니다.';
$string['invalidtablename'] = '테이블 {$a}을(를) 내보낼 수 없음';
$string['line'] = '줄';
$string['message'] = '메시지';
$string['messageprovider:digital_receipt_instructor'] = 'Turnitin 강사 디지털 수령증';
$string['messageprovider:digital_receipt_student'] = 'Turnitin 학생 디지털 수령증';
$string['messageprovider:get_webhook_failure'] = 'Turnitin 웹후크 검사 실패';
$string['messageprovider:new_eula'] = 'Turnitin 새 EULA 릴리스';
$string['neweula:message'] = 'Turnitin의 새로운 EULA가 릴리스되었습니다. 자세한 내용을 보려면 <a href="{$a}">여기</a>를 클릭하십시오.';
$string['neweula:subject'] = 'Turnitin 새 EULA 릴리스됨';
$string['pluginname'] = 'Turnitin Integrity 플러그인';
$string['pluginsetup'] = '설정';
$string['privacy:metadata:plagiarism_turnitinsim_client'] = 'Turnitin에 성공적으로 제출하려면 Moodle과 Turnitin이 특정 사용자 데이터를 교환해야 합니다. Moodle 플러그인 및 GDPR에 대한 자세한 내용은 https://help.turnitin.com/feedback-studio/moodle/moodle-plugins-and-gdpr.htm을 참조하십시오.';
$string['privacy:metadata:plagiarism_turnitinsim_client:firstname'] = 'Cloud Viewer를 시작하면 사용자 식별을 위해 사용자의 이름이 Turnitin에 전송됩니다.';
$string['privacy:metadata:plagiarism_turnitinsim_client:lastname'] = 'Cloud Viewer를 시작하면 사용자 식별을 위해 사용자의 성이 Turnitin에 전송됩니다.';
$string['privacy:metadata:plagiarism_turnitinsim_client:submission_content'] = '파일/제출물의 콘텐츠가 Turnitin에 처리를 위해 전송됩니다.';
$string['privacy:metadata:plagiarism_turnitinsim_client:submission_filename'] = '제출된 파일을 식별할 수 있도록 제출된 파일의 이름이 Turnitin에 전송됩니다.';
$string['privacy:metadata:plagiarism_turnitinsim_client:submission_title'] = '제출물을 식별할 수 있도록 제출물 제목이 Turnitin에 전송됩니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub'] = 'Moodle 제출물을 Turnitin 제출물에 연결하는 정보입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:identifier'] = 'Moodle이 제출된 파일을 식별하기 위해 사용하는 해시입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:itemid'] = '관련 단원 유형에 대한 제출물을 식별하는 ID입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:overallscore'] = '제출물의 전체 유사성 점수입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:submittedtime'] = '사용자의 제출물이 Turnitin에 전송된 시간을 나타내는 타임스탬프입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:turnitinid'] = 'Turnitin이 제출물 참고 시 사용하는 ID입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_sub:userid'] = '제출한 사용자의 ID입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users'] = 'Moodle 사용자를 Turnitin 사용자에 연결하는 정보입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users:lasteulaaccepted'] = '사용자가 최신 버전의 Turnitin EULA에 동의했습니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users:lasteulaacceptedlang'] = '사용자가 Turnitin EULA에 마지막으로 동의할 때 사용한 언어입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users:lasteulaacceptedtime'] = '사용자가 Turnitin EULA에 마지막으로 동의한 시간을 나타내는 타임스탬프입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users:turnitinid'] = 'Turnitin이 사용자 참고 시 사용하는 ID입니다.';
$string['privacy:metadata:plagiarism_turnitinsim_users:userid'] = '제출한 사용자의 ID입니다.';
$string['queuedrafts'] = '초안 제출물 처리';
$string['queuedrafts_help'] = '초안 제출물은 Turnitin에서 검사용으로 인덱싱되지 않습니다.';
$string['receiptsinstructor:message'] = '<strong>{$a->course_fullname}</strong> 수업의 <strong>{$a->module_name}</strong> 단원에 대한 <strong>{$a->submission_title}</strong> 제출물이 Turnitin에 전송되었습니다.<br /><br />제출물 ID: <strong>{$a->submission_id}</strong><br />제출 날짜: <strong>{$a->submission_date}</strong>';
$string['receiptsinstructor:subject'] = 'Turnitin에 전송된 제출물';
$string['receiptstudent:message'] = '{$a->lastname}{$a->firstname} 님,<br /><br /><strong>{$a->course_fullname}</strong> 수업의 <strong>{$a->module_name}</strong> 단원에 대한 <strong>{$a->submission_title}</strong>  파일이 <strong>{$a->submission_date}</strong>에 Turnitin에 제출되었습니다. 제출물 ID는 <strong>{$a->submission_id}</strong>입니다.<br /><br />Turnitin을 사용해 주셔서 감사합니다.<br /><br />Turnitin 팀';
$string['receiptstudent:subject'] = 'Turnitin 디지털 수령증입니다.';
$string['reportgen0'] = '즉시';
$string['reportgen1'] = '즉시 그리고 마감일에 다시 생성';
$string['reportgen2'] = '마감일';
$string['reportgenoptions'] = '유사성 보고서 생성';
$string['reportgenoptions_help'] = '<strong>즉시:</strong> 파일이 제출된 후 유사성 보고서가 즉시 생성됩니다.<br/><br/><strong>마감일에:</strong> 과제 마감일에만 유사성 보고서가 생성됩니다.<br/><br/><strong>즉시 그리고 마감일에:</strong> 파일이 제출된 후 유사성 보고서가 즉시 생성됩니다. 과제 마감일에 다시 유사성 보고서가 생성됩니다. 수업 내 공모를 검사하려는 경우 이 옵션을 사용할 수 있습니다.';
$string['resubmittoturnitin'] = 'Turnitin에 재제출';
$string['savesuccess'] = '변경 사항 저장됨';
$string['settingslearnmore'] = 'Turnitin 설정에 대해 자세히 알아보기';
$string['submissiondisplayerror:cannotextracttext'] = '보고서를 사용할 수 없음';
$string['submissiondisplayerror:cannotextracttext_help'] = '이 제출물에 대한 보고서를 생성할 수 없습니다. 보고서를 생성할 수 없는 파일 형식이거나 텍스트가 부족합니다.';
$string['submissiondisplayerror:corruptfile'] = '손상된 파일';
$string['submissiondisplayerror:corruptfile_help'] = '업로드한 파일이 손상된 것으로 보입니다.';
$string['submissiondisplayerror:eulanotaccepted'] = 'EULA에 동의하지 않음';
$string['submissiondisplayerror:eulanotaccepted_help'] = '제출물의 유사성을 검사하려면 제출자가 Turnitin EULA에 동의해야 합니다.';
$string['submissiondisplayerror:filelocked'] = '파일 잠김';
$string['submissiondisplayerror:filelocked_help'] = '업로드한 파일을 열려면 암호가 필요합니다.';
$string['submissiondisplayerror:generic'] = '파일이 Turnitin에 전송되지 않음';
$string['submissiondisplayerror:generic_help'] = '이 파일은 Turnitin에 제출되지 않았습니다. 시스템 관리자에게 문의하십시오.';
$string['submissiondisplayerror:notsent'] = '파일이 Turnitin에 전송되지 않음';
$string['submissiondisplayerror:notsent_help'] = '이 파일을 제출할 당시 Turnitin을 사용하도록 설정하지 않았기 때문에 파일이 Turnitin에 제출되지 않았습니다. Turnitin에 제출하려면 제출물을 수정하거나 다시 업로드하십시오.';
$string['submissiondisplayerror:processingerror'] = '처리 오류';
$string['submissiondisplayerror:processingerror_help'] = '제출물을 처리하는 동안 지정되지 않은 오류가 발생했습니다.';
$string['submissiondisplayerror:toolarge'] = '파일이 너무 큼';
$string['submissiondisplayerror:toolarge_help'] = '이 파일은 너무 커서 Turnitin에 전송할 수 없습니다. 독창성을 검사하려면 크기가 100MB 미만인 파일을 제출하십시오.';
$string['submissiondisplayerror:toolittletext'] = '텍스트 부족';
$string['submissiondisplayerror:toolittletext_help'] = '제출물에 유사성 보고서를 생성하기에 충분한 텍스트가 없습니다(제출물에 20개 이상의 단어가 포함되어야 함).';
$string['submissiondisplayerror:toomanypages'] = '페이지가 너무 많음';
$string['submissiondisplayerror:toomanypages_help'] = '제출물에 페이지가 너무 많아 유사성 보고서를 생성할 수 없습니다(제출물의 페이지 수는 400개를 초과할 수 없음)';
$string['submissiondisplayerror:toomuchtext'] = '텍스트가 너무 많음';
$string['submissiondisplayerror:toomuchtext_help'] = '제출물에 텍스트가 너무 많아 유사성 보고서를 생성할 수 없습니다(추출된 텍스트를 UTF-8로 변환한 후 제출물 텍스트가  {$a}자 미만이어야 함).';
$string['submissiondisplayerror:unknown'] = '제출물 오류';
$string['submissiondisplayerror:unknown_help'] = '제출물에 알 수 없는 오류가 발생했으며 이 파일은 Turnitin에 제출되지 않았습니다. 시스템 관리자에게 문의하십시오.';
$string['submissiondisplayerror:unsupportedfiletype'] = '지원되지 않는 파일 형식';
$string['submissiondisplayerror:unsupportedfiletype_help'] = '업로드한 파일 형식이 지원되지 않습니다.';
$string['submissiondisplaystatus:awaitingeula'] = 'EULA를 기다리는 중';
$string['submissiondisplaystatus:cannotextracttext'] = '보고서를 사용할 수 없음';
$string['submissiondisplaystatus:error'] = '오류';
$string['submissiondisplaystatus:notsent'] = '전송되지 않음';
$string['submissiondisplaystatus:pending'] = '보류 중';
$string['submissiondisplaystatus:queued'] = '대기열에 추가됨';
$string['submissiondisplaystatus:unknown'] = '알 수 없는 오류';
$string['taskadminupdate'] = 'Turnitin Integrity 플러그인에 대한 로컬 구성 업데이트';
$string['taskgetreportscores'] = 'Turnitin Integrity 플러그인에 대한 보고서 점수 가져오기';
$string['taskoutputenabledfeaturesnotretrieved'] = 'Turnitin 지원 기능을 검색할 수 없음';
$string['taskoutputenabledfeaturesretrievalfailure'] = 'Turnitin 지원 기능 호출 실패';
$string['taskoutputenabledfeaturesretrieved'] = 'Turnitin 지원 기능이 검색됨';
$string['taskoutputfailedconnection'] = 'Turnitin API에 연결하는 동안 문제가 발생했습니다.';
$string['taskoutputfailedcvlaunchurl'] = 'Turnitin API에서 제출물 ID {$a}에 대한 Cloud Viewer 시작 URL을 요청하는 동안 문제가 발생했습니다.';
$string['taskoutputfailedreportrequest'] = 'Turnitin API에서 제출물 ID {$a}에 대한 독창성 보고서를 요청하는 동안 문제가 발생했습니다.';
$string['taskoutputfailedscorerequest'] = 'Turnitin API에서 제출물 ID {$a}에 대한 독창성 보고서를 요청하는 동안 문제가 발생했습니다.';
$string['taskoutputfailedupload'] = 'Turnitin API에 제출물 ID {$a}에 대한 파일을 업로드하는 동안 문제가 발생했습니다.';
$string['taskoutputfileuploaded'] = 'Turnitin 제출물에 파일이 업로드됨: {$a}';
$string['taskoutputlatesteulanotretrieved'] = '최신 EULA 버전을 검색할 수 없음';
$string['taskoutputlatesteularetrievalfailure'] = '최신 EULA 버전 호출이 실패했습니다.';
$string['taskoutputlatesteularetrieved'] = 'EULA 버전 {$a}이(가) 검색되었습니다.';
$string['taskoutputpluginnotconfigured'] = 'Turnitin Integrity 플러그인이 구성되지 않았기 때문에 {$a}에 대한 작업을 실행할 수 없습니다.  <br/>사이트 관리에서 플러그인 구성 페이지로 이동하여 Turnitin API 자격 증명을 추가하십시오.';
$string['taskoutputsubmissioncreated'] = 'Turnitin에 생성된 제출물: {$a}';
$string['taskoutputsubmissionnotcreatedeula'] = '제출자가 EULA에 동의하지 않았으므로 Turnitin에 제출물을 생성할 수 없습니다.';
$string['taskoutputsubmissionnotcreatedgeneral'] = 'Turnitin에서 제출물을 생성할 수 없습니다. 로그를 확인하십시오.';
$string['taskoutputwebhookcreated'] = '웹후크가 생성되었습니다. Turnitin이 {$a}(으)로 콜백을 전송합니다.';
$string['taskoutputwebhookcreationfailure'] = '웹후크 생성 요청이 실패했습니다. 로그를 확인하십시오.';
$string['taskoutputwebhookdeleted'] = '웹후크 {$a}이(가) 삭제되었습니다.';
$string['taskoutputwebhookdeletefailure'] = '웹후크를 삭제할 수 없습니다. 로그를 확인하십시오.';
$string['taskoutputwebhooknotcreated'] = '웹후크를 생성할 수 없습니다. 로그를 확인하십시오.';
$string['taskoutputwebhooknotdeleted'] = '웹후크 {$a}을(를) 삭제할 수 없습니다.';
$string['taskoutputwebhooknotretrieved'] = '웹후크 {$a}을(를) 검색할 수 없습니다. 새 웹후크가 생성됩니다.';
$string['taskoutputwebhookretrievalfailure'] = '웹후크 {$a} 검색 호출이 실패했습니다.';
$string['taskoutputwebhookretrieved'] = '웹후크 {$a}이(가) 검색되었습니다. 웹후크가 활성 상태입니다.';
$string['tasksendqueuedsubmissions'] = 'Turnitin Integrity 플러그인에서 대기열에 추가된 파일 전송';
$string['turnitinapikey'] = 'Turnitin API 키';
$string['turnitinapiurl'] = 'Turnitin API URL';
$string['turnitinconfig'] = '플러그인 구성';
$string['turnitinenablelogging'] = '진단 모드 사용';
$string['turnitinenableremotelogging'] = 'Turnitin에 로그 전송';
$string['turnitinenableremotelogging_help'] = '진단을 위해 로그를 Turnitin에 자동으로 전송합니다. 개인 데이터는 전송되지 않습니다. 필요한 경우 Turnitin에서 빠르게 지원을 제공할 수 있도록 이 설정을 사용하는 상태로 유지하는 것이 좋습니다. 그러나 Moodle 환경에서 로그를 찾아 Turnitin에 수동으로 전송할 수도 있습니다.';
$string['turnitinfeatures'] = 'Turnitin Integrity 기능';
$string['turnitinfeatures::eulanotrequired'] = '사용자의 Turnitin EULA 동의는 필요하지 않음';
$string['turnitinfeatures::eularequired'] = '모든 사용자가 Turnitin EULA에 동의해야 함';
$string['turnitinfeatures::header'] = 'Turnitin Integrity 기능';
$string['turnitinfeatures::moreinfo'] = 'Turnitin에서 사용할 수 있는 지원 기능 및 패키지에 대한 자세한 내용은 <a href="http://www.turnitin.com" target="_blank">http://www.turnitin.com</a>을 참조하십시오.';
$string['turnitinfeatures::repositories'] = '데이터베이스 검사 기준:';
$string['turnitinfeatures::viewoptions'] = 'Cloud Viewer 옵션:';
$string['turnitinhideidentity'] = 'Turnitin에서 학생 ID 숨기기';
$string['turnitinmodenabled'] = '{$a}에 Turnitin Integrity 사용';
$string['turnitinpluginenabled'] = 'Turnitin 사용';
$string['turnitinpluginsettings'] = 'Turnitin Integrity 플러그인 설정';
$string['turnitinsim'] = 'Turnitin Integrity 플러그인';
$string['turnitinsim:enable'] = 'Turnitin Integrity 사용';
$string['turnitinsim:viewfullreport'] = '독창성 보고서 보기';
$string['turnitinsiminternet'] = '인터넷 콘텐츠를 기준으로 검사';
$string['turnitinsimprivate'] = '개인 콘텐츠를 기준으로 검사';
$string['turnitinviewermatchsubinfo'] = '기관의 강사가 제출물 정보를 보고 내부 일치 항목을 확인하도록 허용';
$string['turnitinviewersavechanges'] = '뷰어 변경 사항 저장';
$string['turnitinviewerviewfullsource'] = '기관의 강사가 제출물의 전체 텍스트를 보고 내부 일치 항목을 확인하도록 허용';
$string['viewapilog'] = '{$a}에서 API 로그 보기';
$string['viewerpermissionferpa'] = '다음 권한은 기관에서 데이터를 공유하는 방식에 영향을 미칩니다. 이 데이터에 대한 책임은 전적으로 기관에 있으므로 이러한 권한을 설정할 때는 학생 레코드에 관한 기관의 정책을 완벽히 준수하는지 여부를 고려하십시오.';
$string['viewerpermissionoptions'] = '뷰어 권한';
$string['viewlogs'] = '로그';
$string['webhook_description'] = '{$a}용 웹후크';
$string['webhookincorrectsignature'] = '서명이 올바르지 않아 웹후크 콜백이 실패했습니다.';
