@section('menu')
<header>
    <nav>
        <div class="logo">
            <h3><a href="/">Natalia Kruglova</a></h3>
        </div>
        <ul class="menu">
            <li><a href={{route('index')}} class="active">ГЛАВНАЯ</a></li>
            <li><a href={{route('price')}}>ПРАЙС</a></li>
            <li><a href={{route('about')}}>ОБО МНЕ</a></li>
            <li><a href={{route('info')}}>КОНТАКТЫ</a></li>
        </ul>
    </nav>
</header>
