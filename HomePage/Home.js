const RootStyles = getComputedStyle(document.documentElement);
var AnimationDuration =  RootStyles.getPropertyValue('--AnimationDuration');
var IsMobile = (RootStyles.getPropertyValue('--IsMobile') == '1');

var SecondaryTextColor = RootStyles.getPropertyValue('--SecondaryTextColor');
var MainTextColor = RootStyles.getPropertyValue('--MainTextColor');
/*var MainBackground = RootStyles.getPropertyValue('--MainBackground');*/


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
        Title.style.setProperty('color', MainTextColor);
    }


    document.getElementById('SocialMediaButtonsToggleA').addEventListener('touchstart', function() {
        var SVG = document.getElementById('MoreSVG');
        SVG.style.animation = 'GlowInAnimation ' + AnimationDuration + ' forwards';

        var Button = document.getElementById('SocialMediaButtonsToggleA');
        Button.style.setProperty('box-shadow', '0 0 20px ' + SecondaryTextColor);
        Button.style.setProperty('text-shadow', '0 0 20px ' + SecondaryTextColor);
        Button.style.setProperty('transform', 'scale(1.1)');
        Button.style.setProperty('background', 'var(--MainBackground)');
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
        Button.style.setProperty('background', 'var(--MainTextColor)');
    });
}
