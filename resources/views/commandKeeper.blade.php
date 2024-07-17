<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->

    </head>
    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
            <form action="{{ route('commandKeeper') }}" method="POST">
                @csrf
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title">
                </div>
                <div>
                    <label for="command">COmmand:</label>
                    <input type="textarea" id="command" name="command">
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
    </body>
</html>
