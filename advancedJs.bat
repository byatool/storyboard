python c:/lib/closure/closure-library/closure/bin/closurebuilder.py ^
--jvm_flags="-d32" ^
--root="c:/lib/closure/closure-library/" ^
--root="content/script/live/" ^
--namespace="src.base.helper.arrayHelper" ^
--namespace="src.base.helper.constants" ^
--namespace="src.base.helper.domCreation" ^
--namespace="src.base.helper.domHelper" ^
--namespace="src.base.helper.events" ^
--namespace="src.base.helper.googleWrapper" ^
--namespace="src.base.control.autocomplete" ^
--namespace="src.base.control.buttonList" ^
--namespace="src.base.control.dropDownList" ^
--namespace="src.base.control.editableDiv" ^
--namespace="src.base.control.feedback.form" ^
--namespace="src.base.control.formBuilder" ^
--namespace="src.base.control.formatTextAreaDisplay" ^
--namespace="src.base.control.formatTextAreaDisplay.javascript" ^
--namespace="src.base.control.formatTextAreaDisplay.html" ^
--namespace="src.base.control.formComponent" ^
--namespace="src.base.control.gridBuilder" ^
--namespace="src.base.control.login" ^
--namespace="src.base.control.messageBox" ^
--namespace="src.base.control.pager" ^
--namespace="src.base.control.popupDatePicker" ^
--namespace="src.base.control.popupDatePicker.constant" ^
--namespace="src.base.control.refreshPair" ^
--namespace="src.base.control.redirectList" ^
--namespace="src.base.control.simpleInformationDisplay" ^
--namespace="src.base.control.tabs" ^
--namespace="src.base.control.tagContainer" ^
--namespace="src.base.control.wall" ^
--namespace="src.base.control.zippyContainer" ^
--namespace="src.base.control.zippyGrid" ^
--namespace="src.site.validation.validateSocialSecurityNumber" ^
--namespace="src.site.validation.validateText" ^
--namespace="src.site.validation.validationInterpreter" ^
--namespace="src.site.view.mainContent" ^
--output_mode=compiled ^
--compiler_jar="c:/lib/closure/compiler.jar" ^
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" ^
--compiler_flags="--generate_exports" > "resources/public/script/final.js"
REM --jvm_flags="-d32" ^