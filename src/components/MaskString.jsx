


export default function MaskString({ pattern, replace, content, start, end, complete }) {

  const replaceLetters = replace || []
  start = start || 0

  const formaterFunction = ( inputValue ) => {
    let currentIndexLetter = 0;
    const valueString = inputValue.textContent ? inputValue.textContent.toString() : inputValue.toString();
    end = end || valueString.length;

    return pattern.replace( /#|./g, ( patternLetter,currentIndex ) => {
      if( currentIndex < start ) return ''
      if( currentIndex === end ) {
        const restPattern = pattern.substr(end)
        const indexEnd = valueString.indexOf( valueString.substr( -restPattern.length ))
        if( indexEnd !== -1 ){
          currentIndexLetter = indexEnd
        }
      }
      if( patternLetter === '#') {
        currentIndexLetter++
        if( valueString[ currentIndexLetter-1 ] ) return valueString[ currentIndexLetter-1 ];
        return ''
      }
      else if( replaceLetters.indexOf( patternLetter ) !== -1 ) {
        currentIndexLetter++;
        return patternLetter
      }
      return patternLetter
    })
    .concat( complete ? content.substr(currentIndexLetter) : '' );
  }

  return pattern ? formaterFunction(content) : content

}