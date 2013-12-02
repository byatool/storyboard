goog.require('goog.string');
goog.require('src.base.control.controlConstant');
goog.require('src.base.control.editableDiv');
goog.require('src.site.view.workContentRow');


goog.provide('src.test.view.workContentRow.whenInitializingAWorkContentRow');

/**
 @export
 */
src.test.view.workContentRow.whenInitializingAWorkContentRow.describe = function () {
  
  //Using
  
  var Constant_ = src.site.view.workContentRow.constant;
  var Current_ = src.site.view.workContentRow;
  var ControlConstant_ = src.base.control.controlConstant;    
  
  
  //Fields
  
  var ChapterId_ = goog.string.getRandomString();  //remove?
  var ChapterTitleText_ = goog.string.getRandomString();  //remove?
  var ChapterTitleUrl_ = goog.string.getRandomString();  //remove?
  
  var ContainerId_ = goog.string.getRandomString();
  
  var appendChild_;
  var createADiv_;
  var currentItem_;
  var createTheRowHeader_;  //remove?
  var options_;
  var parentRow_;
  var refreshGrid_;
  var workContentRowHeader_;
  
  
  //Test Hooks
  
  beforeEach(function() {
    parentRow_ = {};
    options_ = {};
    options_[Constant_.ChapterTitleUrl] = ChapterTitleUrl_;
    
    currentItem_ = {};
    currentItem_[Constant_.ParameterChapterTitle] = ChapterTitleText_;
    currentItem_[Constant_.ParameterChapterId] = ChapterId_;
    
    createTheRowHeader_ = function(){};
    
    createADiv_ = function(attributes){
      switch(attributes[ControlConstant_.Class]) {
      case Constant_.WorkContentRow:
        return parentRow_;
        break;
        
      case Constant_.WorkContentRowHeader:
        return workContentRowHeader_;
        break;
        
      default:
        return parentRow_;
        break;
      }};
    
    
    appendChild_ = function(){};
    refreshGrid_ = function(){};
    
  });
  
  
  //Support Methods
  
  var callTheMethod_ = function() {
    return Current_.create(currentItem_, options_, refreshGrid_, createADiv_, createTheRowHeader_,
                           appendChild_);
  };
  
  
  //Test Methods
  
  it('should create a parent container.', function() {
    var methodWasCalled = false;
    
    createADiv_ = function(attributes) {
      methodWasCalled = methodWasCalled ||
        (Constant_.WorkContentRow !== undefined &&
         attributes[ControlConstant_.Id] === Constant_.WorkContentRow &&
         attributes[ControlConstant_.Class] === Constant_.WorkContentRow);
      
      return parentRow_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });


  it('should create the row header.', function() {
    var methodWasCalled = false;
    
    createTheRowHeader_ = function(currentItem, options, createADiv,
                                   initializeEditableDiv, setTextContent,
                                   appendChild){
      methodWasCalled = currentItem === currentItem_ &&
        options === options_ &&
        createADiv === createADiv_ &&
        initializeEditableDiv === src.base.control.editableDiv.initialize &&
        setTextContent === goog.dom.setTextContent &&
        appendChild === appendChild_;
    };
    
    callTheMethod_();
    
    expect(methodWasCalled).toBe(true);
  });
  
  
  it('should return the parent container.', function() {
    expect(callTheMethod_()).toBe(parentRow_);
  });    
};

describe('When refreshing AWorkContent, it', function() {
  src.test.view.workContentRow.whenInitializingAWorkContentRow.describe();
});







