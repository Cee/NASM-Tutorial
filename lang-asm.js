PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // clojure has more paren types than minimal lisp.
         //['opn',             /^[\(\{\[]+/, null, '([{'],
         //['clo',             /^[\)\}\]]+/, null, ')]}'],
         // A line comment that starts with ;
         [PR['PR_COMMENT'],     /^;[^\r\n]*/, null, ';'],
         // Whitespace
         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
         // A double quoted, possibly multi-line, string.
         //[PR['PR_STRING'],      /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"']
        ],
        [
         // clojure has a much larger set of keywords
         [PR['PR_KEYWORD'],     /^\b(?:[e|r]?(ax|bx|cx|dx|si|di|sp|bp)|[a-d](h|l)|(r|xmm|ymm)([0-9]|1[0-5])|st[0-7]?)\b/, null],
         //[PR['PR_TYPE'], /^:[0-9a-zA-Z\-]+/]
        ]),
    ['asm']);
