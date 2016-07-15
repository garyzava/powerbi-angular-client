angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/app/application/template.html","<div class=container><h1>Power BI - Sample - Client - Angular</h1><p>Demonstrate how to consume Power BI API and render using angular components. <a href=https://github.com/Microsoft/PowerBI-Angular target=_blank>PowerBI-Angular</a></p><h2>Scenarios:</h2><ul class=\"nav nav-pills\"><li role=presentation ui-sref-active=active><a ui-sref=application.scenario1>Scenario 1: Static Embed</a></li><li role=presentation ui-sref-active=active><a ui-sref=application.scenario2>Scenario 2: Dynamic Embed</a></li><li role=presentation ui-sref-active=active><a ui-sref=application.scenario3>Scenario 3: Custom Page Navigation</a></li><li role=presentation ui-sref-active=active><a ui-sref=application.scenario4>Scenario 4: Custom Filter Pane</a></li></ul><hr class=m-y-md><div ui-view=main>Loading...</div></div>");
$templateCache.put("/app/scenario4/template.html","<h1>Custom Filter Pane</h1><p>Filter pane is hidden in the embedded report and recreated by developer to allow custom branding or special preconfigured filters.</p><div class=row><div class=col-md-9><div class=row><div class=col-xs-12><powerbi-component options=vm.embedConfiguration id=reportcustomfilterpane class=powerbi-container on-embedded=vm.onEmbedded($embed)></powerbi-component></div></div><div class=row><div class=col-md-4><h4>Report</h4></div><div class=col-md-4><h4>Page</h4></div><div class=col-md-4><h4>Visual</h4></div></div><div class=row><div class=col-xs-4><form id=removeAllFiltersReportForm><div class=form-group><input class=form-control disabled placeholder=N/A></div><button type=button class=\"btn btn-warning\" ng-click=vm.removeAllReportFiltersClicked()>Remove All Filters at Report Level</button></form></div><div class=col-xs-4><form id=removeAllFiltersPageForm><div class=form-group><select id=removeAllFiltersPagesList class=form-control ng-options=\"page as page.displayName for page in vm.reportPages\" ng-model=vm.selectedRemoveAllFilterPage></select></div><button type=button class=\"btn btn-warning\" ng-click=vm.removeAllPageFiltersClicked(vm.selectedRemoveAllFilterPage)>Remove All Filters at Page Level</button></form></div><div class=col-xs-4><form id=removeAllFiltersVisualForm><div class=form-group><select id=removeAllFiltersVisualsList class=form-control><option value=visualId1>Visual Id 1</option><option value=visualId2>Visual Id 2</option><option value=visualId3>Visual Id 3</option><option value=visualId4>Visual Id 4</option></select></div><button type=button class=\"btn btn-warning\" ng-click=vm.removeAllVisualFiltersClicked()>Remove All Filters at Visual Level</button></form></div></div><div class=row><div class=col-xs-12><hr></div><div class=col-md-4><button type=button class=\"btn btn-primary\" ng-click=vm.predefinedFilter1Clicked()>Predefined Basic Report Filter</button><p>Store > Name \'In\' or \'Park\'</p><button type=button class=\"btn btn-primary\" ng-click=vm.predefinedFilter2Clicked()>Predefined Advanced Report Filter</button><p>Store > Name contains \'Wash\' or contains \'Park\'</p></div><div class=col-md-4><button type=button class=\"btn btn-primary\" ng-click=vm.predefinedFIlter3Clicked()>Predefined Advanced Page Filter</button><p>Store > Name contains \'Wash\' or contains \'Park\' (Page: District Monthly Sales)</p></div><div class=col-md-4>N/A</div></div></div><div class=col-md-3><powerbi-filter-pane pages=vm.reportPages on-add-filter=\"vm.onFilterAdded($filter, $target)\"></powerbi-filter-pane></div></div>");
$templateCache.put("/app/scenario1/template.html","<h1>Static Embed</h1><p>Report to embed is known by the developer: {{vm.model.id}}</p><powerbi-report embed-url=vm.model.embedUrl access-token=vm.model.accessToken class=powerbi-frame--dotted></powerbi-report>");
$templateCache.put("/app/scenario2/template.html","<h1>Dynamic Embed</h1><p>Report to embed is chosen by the user.</p><p>Example: Search reports by name, render selected report.</p><small>Hint: Type \'Re\' in the text field and search to find all reports that begin with \'Re\'</small><form id=search-form class=form-inline><div class=form-group><label for=searchinput>Search</label> <input type=text ng-model=vm.searchInput class=form-control id=searchinput required placeholder=\"Enter report name\" autocomplete=off></div><button type=submit class=\"btn btn-primary\">Search</button> <button type=button class=\"btn btn-success\" ng-click=vm.showAllClicked()>Show All</button><div class=checkbox><label for=filterPaneCheckbox><input type=checkbox name=filterPaneCheckbox id=filterPaneCheckbox checked> Enable filter pane when embedding report.</label></div></form><p class=reportslistdescription>Total Results: <span id=reportslistcount>{{vm.reports.length}}<span></span></span></p><ol id=reportslist><li ng-repeat=\"report in vm.reports\"><span class=report-name>{{report.name}}</span> <button type=button class=\"btn btn-success\" ng-click=vm.embedReport(report)>Embed!</button></li></ol><p class=text-right><button type=button class=\"btn btn-danger\" ng-click=vm.resetClicked()>Reset</button></p><powerbi-component options=vm.report></powerbi-component>");
$templateCache.put("/app/scenario3/template.html","<h1>Custom Page Navigation</h1><p>Page navigation is hidden in the embedded report and recreated by developer to allow custom branding or even automation to tell stories and navigate user.</p><powerbi-component options=vm.embedConfiguration id=reportcustompagenav class=powerbi-container on-embedded=vm.onEmbedded($embed)></powerbi-component><h3 class=text-center>{{vm.activePage.displayName}}</h3><powerbi-page-navigation active-page=vm.activePage pages=vm.pages on-cycle-clicked=vm.cyclePageClicked() on-previous-clicked=vm.previousPageClicked() on-next-clicked=vm.nextPageClicked() on-page-clicked=vm.pageClicked($page)></powerbi-page-navigation>");
$templateCache.put("/app/components/powerbi-filter-pane/template.html","<form ng-submit=vm.onSubmit()><h2>Custom Filter Pane</h2><fieldset><legend>Target Type:</legend><div class=form-group><select class=form-control ng-options=\"targetType for targetType in vm.targetTypes\" ng-model=vm.selectedTargetType><option ng-repeat>{{targetType}}</option></select></div><div class=form-group><label for=table>Table</label> <input type=text class=form-control placeholder=Table ng-model=vm.table></div><div class=\"form-group filter-type filter-type--column\" ng-if=\"vm.selectedTargetType === \'Column\'\"><label for=column>Column</label> <input type=text class=form-control placeholder=Column ng-model=vm.column></div><div class=\"form-group filter-type filter-type--hierarchy\" ng-if=\"vm.selectedTargetType === \'Hierarchy\'\"><label for=hierarchy>Hierarchy</label> <input type=text class=form-control placeholder=hierarchy ng-model=vm.hierarchy></div><div class=\"form-group filter-type filter-type--hierarchy\" ng-if=\"vm.selectedTargetType === \'Hierarchy\'\"><label for=hierarchylevel>Hierarchy Level</label> <input type=text class=form-control placeholder=\"Hierarchy Level\" ng-model=vm.hierarchyLevel></div><div class=\"form-group filter-type filter-type--measure\" ng-if=\"vm.selectedTargetType === \'Measure\'\"><label for=measure>Measure</label> <input type=text class=form-control placeholder=Measure ng-model=vm.measure></div></fieldset><fieldset><legend>Operator Type:</legend><div class=radio ng-repeat=\"filterType in vm.filterTypes\"><label><input type=radio name=filterType ng-value=filterType ng-model=vm.selectedFilterType> {{filterType}}</label></div><div class=\"filter-operators filter-operators--basic\" ng-if=\"vm.selectedFilterType === \'Basic\'\"><h5>Basic Operators</h5><div class=form-group><select class=form-control ng-options=\"operator for operator in vm.basicOperators\" ng-model=vm.selectedBasicOperator></select></div><h5>Values</h5><div class=basicvalues><div class=form-group><input class=\"form-control basic-value\" placeholder=\"Value 1\" ng-model=vm.value1></div><div class=form-group><input class=\"form-control basic-value\" placeholder=\"Value 2\" ng-model=vm.value2></div></div></div><div class=\"filter-operators filter-operators--advanced\" ng-if=\"vm.selectedFilterType === \'Advanced\'\"><h5>Advanced Operators</h5><p>Logical Operator</p><div class=form-group><select class=form-control ng-options=\"operator for operator in vm.logicalOperators\" ng-model=vm.selectedLogicalOperator></select></div><div class=advancedvalues><div class=\"form-group advanced-value\"><p>Value</p><div class=form-group><input class=\"form-control advanced-value-input\" placeholder=\"Value 1\" ng-model=vm.valueA></div><p>Condition Operator</p><select class=\"form-control advanced-logical-condition\" ng-options=\"operator for operator in vm.conditionalOperators\" ng-model=vm.conditionalOperatorA></select></div><div class=\"form-group advanced-value\"><p>Value</p><div class=form-group><input class=\"form-control advanced-value-input\" placeholder=\"Value 1\" ng-model=vm.valueB></div><p>Condition Operator</p><select class=\"form-control advanced-logical-condition\" ng-options=\"operator for operator in vm.conditionalOperators\" ng-model=vm.conditionalOperatorB></select></div></div></div></fieldset><fieldset><legend>Report Target:</legend><div class=form-group><div class=radio ng-repeat=\"reportTarget in vm.reportTargets\"><label><input type=radio name=filterTarget ng-value=reportTarget ng-model=vm.selectedReportTarget> {{reportTarget}}</label></div></div><div class=\"filter-target filter-target--page\" ng-show=\"vm.selectedReportTarget === \'Page\'\"><div class=form-group><select class=form-control ng-options=\"page as page.displayName for page in vm.pages\" ng-model=vm.selectedPage></select></div></div></fieldset><div class=form-group><button type=submit class=\"btn btn-success\">Add Filter</button></div></form>");
$templateCache.put("/app/components/powerbi-page-navigation/template.html","<div class=powerbi-page-navigation><button type=button id=prevbutton class=\"powerbi-page-navigation__previous btn btn-primary\" ng-click=vm.previousPageClicked()>&lt; Prev</button><div id=reportpagesbuttons class=powerbi-page-navigation__pages><button type=button class=\"btn btn-success\" ng-class=\"{ \'active\': page.name === vm.activePage.name }\" ng-repeat=\"page in vm.pages\" ng-click=vm.pageClicked(page);>{{page.displayName}}</button> <span ng-if=\"vm.pages.length === 0\">No pages loaded</span></div><button type=button id=cyclebutton class=\"powerbi-page-navigation__cycle btn btn-warning\" ng-class=\"{\'active\': vm.cycleIsEnabled }\" ng-click=vm.cyclePageClicked()><span ng-show=vm.cycleIsEnabled>Disable</span><span ng-show=!vm.cycleIsEnabled>Enable</span> Cycle</button> <button type=button id=nextbutton class=\"powerbi-page-navigation__next btn btn-primary\" ng-click=vm.nextPageClicked()>Next &gt;</button></div>");}]);