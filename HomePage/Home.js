
/*function ToOklch(RGBA) {
    const { parse, convert, formatRgb } = culori;

    const ParsedColor = parse(RGBA);
    const OklchColor = convert('oklch')(ParsedColor);
    
    return OklchColor;
}

function Mix(Color1, Color2, Percentage) {
    const { parse, interpolate, formatRgb } = culori;
  
    // Ensure percentage is between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(Percentage, 100)) / 100;
  
    // Parse the colors
    const color1 = parse(Color1);
    const color2 = parse(Color2);
  
    // Interpolate between the two colors
    const interpolator = interpolate([color1, color2]);
    const mixedColor = interpolator(clampedPercentage);
  
    // Return the mixed color in rgba format
    return formatRgb(mixedColor);
}
*/

function lerp(start, end, percentage) {
    return start + (end - start) * percentage;
  }
  
  function parseRGBA(rgba) {
    const matches = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*\.?\d+)?\)/);
    return {
      r: parseInt(matches[1], 10),
      g: parseInt(matches[2], 10),
      b: parseInt(matches[3], 10),
      a: matches[4] !== undefined ? parseFloat(matches[4]) : 1
    };
  }
  
  function formatRGBA(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }
  
  function Mix(Color1, Color2, Percentage) {
    const clampedPercentage = Math.max(0, Math.min(Percentage, 100)) / 100;
    const color1 = parseRGBA(Color1);
    const color2 = parseRGBA(Color2);
  
    const mixedColor = {
      r: Math.round(lerp(color1.r, color2.r, clampedPercentage)),
      g: Math.round(lerp(color1.g, color2.g, clampedPercentage)),
      b: Math.round(lerp(color1.b, color2.b, clampedPercentage)),
      a: lerp(color1.a, color2.a, clampedPercentage)
    };
  
    return formatRGBA(mixedColor);
  }

  function RGBtoXYZ(R, G, B)
{
    var_R = parseFloat( R / 255 )        //R from 0 to 255
    var_G = parseFloat( G / 255 )        //G from 0 to 255
    var_B = parseFloat( B / 255 )        //B from 0 to 255

    if ( var_R > 0.04045 ) var_R = ( ( var_R + 0.055 ) / 1.055 ) ^ 2.4
    else                   var_R = var_R / 12.92
    if ( var_G > 0.04045 ) var_G = ( ( var_G + 0.055 ) / 1.055 ) ^ 2.4
    else                   var_G = var_G / 12.92
    if ( var_B > 0.04045 ) var_B = ( ( var_B + 0.055 ) / 1.055 ) ^ 2.4
    else                   var_B = var_B / 12.92

    var_R = var_R * 100
    var_G = var_G * 100
    var_B = var_B * 100

    //Observer. = 2°, Illuminant = D65
    X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805
    Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722
    Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505
    return [X, Y, Z]
}

function XYZtoLAB(x, y, z)
{
    var ref_X =  95.047;
    var ref_Y = 100.000;
    var ref_Z = 108.883;

    var_X = x / ref_X          //ref_X =  95.047   Observer= 2°, Illuminant= D65
    var_Y = y / ref_Y          //ref_Y = 100.000
    var_Z = z / ref_Z          //ref_Z = 108.883

    if ( var_X > 0.008856 ) var_X = var_X ^ ( 1/3 )
    else                    var_X = ( 7.787 * var_X ) + ( 16 / 116 )
    if ( var_Y > 0.008856 ) var_Y = var_Y ^ ( 1/3 )
    else                    var_Y = ( 7.787 * var_Y ) + ( 16 / 116 )
    if ( var_Z > 0.008856 ) var_Z = var_Z ^ ( 1/3 )
    else                    var_Z = ( 7.787 * var_Z ) + ( 16 / 116 )

    CIE_L = ( 116 * var_Y ) - 16
    CIE_a = 500 * ( var_X - var_Y )
    CIE_b = 200 * ( var_Y - var_Z )

return [CIE_L, CIE_a, CIE_b]
}

function LabToOklch(l, a, b1) {
    const c = Math.sqrt(a * a + b1 * b1);
    let h = (Math.atan2(b1, a) * 180) / Math.PI;
    if (h < 0) {
      h += 360;
    }
  
    // Format output
    l = (l * 100).toFixed(2); // Convert lightness to percentage
  
    return `oklch(${l}% ${c.toFixed(2)} ${h.toFixed(2)})`;
}

function ToOklch(RGBA) {
    const color = parseRGBA(RGBA);
  
    // Convert RGB to LAB
    let r = color.r;
    let g = color.g;
    let b = color.b;

    return LabToOklch(XYZtoLAB(RGBtoXYZ(r, g, b)));
}
 
  /*function ToOklch(RGBA) {
    const color = parseRGBA(RGBA);
  
    // Convert RGB to LAB
    let r = color.r;
    let g = color.g;
    let b = color.b;
  
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
    const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;
  
    let l = y;
    let a = (x - y) * 500;
    let b1 = (y - z) * 200;
  
    // Convert LAB to OKLCH
    const c = Math.sqrt(a * a + b1 * b1);
    let h = (Math.atan2(b1, a) * 180) / Math.PI;
    if (h < 0) {
      h += 360;
    }
  
    // Format output
    l = (l * 100).toFixed(2); // Convert lightness to percentage
  
    return `oklch(${l}% ${c.toFixed(2)} ${h.toFixed(2)})`;
  }*/
  


const RootStyles = getComputedStyle(document.documentElement);
var AnimationDuration =  RootStyles.getPropertyValue('--AnimationDuration');
var IsMobile = (RootStyles.getPropertyValue('--IsMobile') == '1');

var SecondaryTextColor = RootStyles.getPropertyValue('--MainThemeColor');

//--------------------- OnLoad Apply Oklch Border Gradient --------------------//
const Icons = document.querySelectorAll('.WorkExperienceBodyLineSvg');
var Color1 = 'rgba(0, 0, 0, 0)';
var Color2 = RootStyles.getPropertyValue('--TextWhite');
var Color3 = RootStyles.getPropertyValue('--MainThemeColor');

var BackgroundResult = 'linear-gradient(to bottom, var(--BackgroundLightGrey), var(--BackgroundLightGrey)) padding-box, ';
BackgroundResult += 'conic-gradient(from var(--bg-angle) in oklch longer hue, ';
/*BackgroundResult += 'oklch(95.51% 0 0) 0deg,';
BackgroundResult += 'oklch(95.51% 0 0) 180deg,';
BackgroundResult += 'oklch(95.51% 0 0 / 0%) 180deg,';
BackgroundResult += 'oklch(95.51% 0 0 / 0%) 360deg';*/

var Angle = 360;
var AngleMultiplier = 2;
var MaxAngle = Angle * AngleMultiplier;
for(var i = 0; i < MaxAngle; i += 1){
    var Value = (100 - ((i / Angle) * 100) % 100) * 1;
    if(Value < 0) Value = -Value;

    if(i < Angle){
        //var Color = ToOklch(Mix(Color2, Color1, Value));
        var Color = ToOklch(Color2);
        BackgroundResult += Color + ' ' + (i / MaxAngle * Angle).toString() + 'deg,'
        //BackgroundResult += 'oklch(95.51% 0 0 / ' + Value.toString() + '%) ' + (i / MaxAngle * Angle).toString() + 'deg,'
    }
    else {
        //var Color = ToOklch(Mix(Color3, Color1, Value));
        var Color = ToOklch(Color2);
        BackgroundResult += Color + ' ' + (i / MaxAngle * Angle).toString() + 'deg,'
        //BackgroundResult += 'oklch(93.32% 0.19552642129227554 104.2423750230839 / ' + Value.toString() + '%) ' + (i / MaxAngle * Angle).toString() + 'deg,'
    }
}
BackgroundResult += 'oklch(95.51% 0 0 / 0%) 360deg';
BackgroundResult += ') border-box';


Icons.forEach(Icon => {
    
    Icon.style.setProperty('background', BackgroundResult);

});



//----------------------------- Mouse Over Events -----------------------------//
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


//----------------------------- Section Selection -----------------------------//

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



//----------------------------- Mobile Vs Desktop -----------------------------//
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