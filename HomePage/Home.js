const RootStyles = getComputedStyle(document.documentElement);
var AnimationDuration =  RootStyles.getPropertyValue('--AnimationDuration');
var IsMobile = (RootStyles.getPropertyValue('--IsMobile') == '1');

var SecondaryTextColor = RootStyles.getPropertyValue('--MainThemeColor');



const SocialMediaList = document.getElementById('SocialMediaIconsList');
const SocialMediaCircles = SocialMediaList.querySelectorAll('*');

SocialMediaCircles.forEach(Circle => {
    Circle.addEventListener('mouseover', function() {
        const ChildTags = Circle.querySelectorAll('*');
        if( ChildTags != null && ChildTags.length > 0){
            const LowerLevelTags = ChildTags[0].querySelectorAll('*');
            if(LowerLevelTags != null && LowerLevelTags.length > 0){
                const SVG = LowerLevelTags[0];
                SVG.style.animation = 'GlowInAnimation ' + AnimationDuration + ' forwards';
            }
        }
    });

    

    Circle.addEventListener('mouseout', function() {
        const ChildTags = Circle.querySelectorAll('*');
        if( ChildTags != null && ChildTags.length > 0){
            const LowerLevelTags = ChildTags[0].querySelectorAll('*');
            if(LowerLevelTags != null && LowerLevelTags.length > 0){
                const SVG = LowerLevelTags[0];
                SVG.style.animation = 'GlowOutAnimation ' + AnimationDuration + ' forwards';
            }
        }
    });


});

var SelectedSectionID = 'Section1';

function SelectSection(ID){
    SelectedSectionID = ID;
    const SectionSelections = document.querySelectorAll('.SectionSelection');
    SectionSelections.forEach(SectionSelection => {
        const Icon = SectionSelection.children[0];
        const Title = SectionSelection.children[1];
        if(SectionSelection.id == ID) {
            SectionSelection.style.setProperty('border', 'solid 2px var(--MainThemeColor)');
            SectionSelection.style.setProperty('box-shadow', '0 0 30px var(--MainThemeColor)');
            Icon.style.setProperty('filter', 'drop-shadow(0px 0px 8px var(--MainThemeColor))');
            Title.style.setProperty('filter', 'drop-shadow(0px 0px 8px var(--MainThemeColor))');
        } else {
            SectionSelection.style.setProperty('border', 'solid 2px var(--TextWhite)');
            SectionSelection.style.setProperty('box-shadow', '0 0 15px var(--TextWhite)');
            Icon.style.setProperty('filter', 'none');
            Title.style.setProperty('filter', 'none');
        }
    });

    var SectionNumber = SelectedSectionID.charAt(SelectedSectionID.length - 1);
    var SelectedDotID = 'Dot' + SectionNumber;
    const Dots = Array.from(document.getElementById('SectionsDots').children);
    Dots.forEach(Dot => {
        if(Dot.id == SelectedDotID) {
            Dot.style.setProperty('opacity', '1');
            Dot.style.setProperty('scale', '1.2');
        } else {
            Dot.style.setProperty('opacity', '0.4');
            Dot.style.setProperty('scale', '0.9');
        }
    });

    const SectionsDetail = document.querySelectorAll('.SectionDetail');
    SectionsDetail.forEach(SectionDetail => {
        if(SectionDetail.id == (SelectedSectionID + "Details")){
            SectionDetail.style.setProperty("width", "90%");
            SectionDetail.style.setProperty("text-wrap", "wrap");
            SectionDetail.style.setProperty("border", "solid 2px var(--TextWhite)");
            SectionDetail.style.setProperty("box-shadow", "0 0 10px var(--TextWhite)");
            SectionDetail.style.setProperty("padding", "20px");
            //SectionDetail.style.setProperty("color", "var(--TextWhite)");
            UpdateColor(SectionDetail, "var(--TextWhite)");
            SectionDetail.style.setProperty("transform", "translateX(0%)");
        } else {
            SectionDetail.style.setProperty("width", "0%");
            SectionDetail.style.setProperty("text-wrap", "nowrap");
            SectionDetail.style.setProperty("border", "none");
            SectionDetail.style.setProperty("box-shadow", "none");
            SectionDetail.style.setProperty("padding", "0px");
            //SectionDetail.style.setProperty("color", "transparent");
            UpdateColor(SectionDetail, "transparent");
            if(SectionDetail.id > (SelectedSectionID + "Details"))
                SectionDetail.style.setProperty("transform", "translateX(100%)");
            else 
                SectionDetail.style.setProperty("transform", "translateX(-100%)");
        }
    });
}

SelectSection(SelectedSectionID);

function UpdateColor(tag, target){
    tag.style.setProperty("color", target);
    tag.style.setProperty("fill", target);
    for (let i = 0; i < tag.children.length; i++) {
        UpdateColor(tag.children[i], target);
    }
}


const SectionSelections = document.querySelectorAll('.SectionSelection');
SectionSelections.forEach(SectionSelection => {
    const Icon = SectionSelection.children[0];
    const Title = SectionSelection.children[1];

    var MouseOverEvent;
    var MouseOutEvent;
    var Duration;
    if(IsMobile) {
        MouseOverEvent = 'touchstart';
        MouseOutEvent = 'touchend';
        Duration = '2s';
    } else {
        MouseOverEvent = 'mouseover';
        MouseOutEvent = 'mouseout';
        Duration = '1s';
    }

    SectionSelection.addEventListener(MouseOverEvent, function() {
        if(SectionSelection.id != SelectedSectionID){
            Icon.style.setProperty('animation', 'GlowInOutAnimationWithoutFill ' + Duration + ' linear Infinite');
            Title.style.setProperty('animation', 'GlowInOutAnimationWithoutFill ' + Duration + ' linear Infinite');
            Title.style.setProperty('scale', '1.2');
            Icon.style.setProperty('scale', '1.2');
            SectionSelection.style.setProperty('animation', 'GlowInOutAnimationWithFill ' + Duration + ' linear Infinite');
        }
    });

    SectionSelection.addEventListener(MouseOutEvent, function() {
        Icon.style.setProperty('animation', 'none');
        Title.style.setProperty('animation', 'none');
        Title.style.setProperty('scale', '1');
        Icon.style.setProperty('scale', '1');
        SectionSelection.style.setProperty('animation', 'none');
    });

    SectionSelection.addEventListener('click', function(){
        SelectSection(SectionSelection.id);
    });
});


if(IsMobile){
    function ShowMore(){
        var IconsDiv = document.getElementById('SocialMediaIcons');
        IconsDiv.style.setProperty('width', 'calc(7 * var(--IconSize))');

        var Title = document.getElementById('H1');
        Title.style.setProperty('width', '0%');
        Title.style.setProperty('color', 'transparent');
    }

    function HideMore(){
        var IconsDiv = document.getElementById('SocialMediaIcons');
        IconsDiv.style.setProperty('width', '0%');

        var Title = document.getElementById('H1');
        Title.style.setProperty('width', '100%');
        Title.style.setProperty('color', 'var(--TextWhite)');
    }


    document.getElementById('SocialMediaButtonsToggleA').addEventListener('touchstart', function() {
        var SVG = document.getElementById('MoreSVG');
        SVG.style.animation = 'GlowInAnimation ' + AnimationDuration + ' forwards';

        var Button = document.getElementById('SocialMediaButtonsToggleA');
        Button.style.setProperty('box-shadow', '0 0 20px ' + SecondaryTextColor);
        Button.style.setProperty('text-shadow', '0 0 20px ' + SecondaryTextColor);
        Button.style.setProperty('transform', 'scale(1.1)');
        Button.style.setProperty('background', 'var(--TextLightGrey)');
    });

    document.getElementById('SocialMediaButtonsToggleA').addEventListener('touchend', function() {
        var SVG = document.getElementById('MoreSVG');
        SVG.style.animation = 'GlowOutAnimation ' + AnimationDuration + ' forwards';
        if(SVG.style.transform != 'scaleX(-1)') {
            SVG.style.transform = 'scaleX(-1)';
            ShowMore();
        }
        else {
            SVG.style.transform = 'scaleX(1)';
            HideMore();
        }
        
        var Button = document.getElementById('SocialMediaButtonsToggleA');
        Button.style.setProperty('box-shadow', 'none');
        Button.style.setProperty('text-shadow', 'none');
        Button.style.setProperty('transform', 'scale(1)');
        Button.style.setProperty('background', 'var(--BackgroundWhite)');
    });
} else {
    var OldTime = new Date(); 
    var NewTime = null;
    var ThreashHold = 100;

    function ShowHideSectionTitle(ForceExecution = false) {
        NewTime = new Date();
        if(ForceExecution || ((NewTime - OldTime)) >= ThreashHold){
            OldTime = NewTime;

            const Titles = document.querySelectorAll('.SectionTitle');
            const windowWidth = window.innerWidth;
            let NewColor;

            if (windowWidth > 800) {
                NewColor = 'var(--TextWhite)';
            } else {
                NewColor = 'transparent';
            }

            var SectionHeight = 0;

            Titles.forEach(Title => {
                Title.style.setProperty('color', NewColor);
                    
                var ParentTag = Title.parentNode;
                var SVG = ParentTag.querySelectorAll('svg')[0];

                var TitleHeight = parseFloat(window.getComputedStyle(Title).height);
                var SVG_Height = parseFloat(window.getComputedStyle(SVG).height);
                var ParentPadding = parseFloat(window.getComputedStyle(ParentTag).padding);
                var CurrentHeight = 0;

                if(NewColor == 'transparent') {
                    Title.style.setProperty('transform', 'translateY(-200%)');
                    CurrentHeight = SVG_Height + 2 * ParentPadding;
                }
                else {
                    Title.style.setProperty('transform', 'translateY(0%)');
                    CurrentHeight = SVG_Height + 2 * ParentPadding + TitleHeight;
                }

                if(CurrentHeight > SectionHeight) SectionHeight = CurrentHeight;
            });

            Titles.forEach(Title => {
                var ParentTag = Title.parentNode;
                ParentTag.style.setProperty('height', SectionHeight + 'px');
            });
        }
    }

    window.addEventListener('resize', ShowHideSectionTitle);

    ShowHideSectionTitle(true);
}