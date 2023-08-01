// Сторонние скрипты
import hljs from 'highlight.js/lib/common' // оформление блока кода

// Пользовательские скрипты
import mainNav from '@/components/main-nav' // главная навигация
import codeBlock from '@/components/code-block' // копирование содержимого <code>

hljs.highlightAll()
codeBlock()
mainNav()
