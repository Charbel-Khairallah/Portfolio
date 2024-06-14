const RootStyles = getComputedStyle(document.documentElement);
var AnimationDuration =  RootStyles.getPropertyValue('--AnimationDuration');


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
