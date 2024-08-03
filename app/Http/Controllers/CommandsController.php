<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Commands;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CommandsController extends Controller
{
    public function index()
    {
        $commands = Commands::orderBy('created_at', 'desc')->where('user_id', Auth::id())->get();
        return Inertia::render('CommandKeeper', [
            'commands' => $commands
        ]);
    }

    public function search(Request $request)
    {

        $query = $request->input('query', '');
        $commands = Commands::where('user_id', Auth::id())
        ->where(function ($queryBuilder) use ($query) {
            $queryBuilder->where('title', 'like', "%{$query}%")
                         ->orWhere('command', 'like', "%{$query}%");
        })
        ->orderBy('created_at', 'desc')
        ->get();

        return response()->json($commands);

    }

    public function create(Request $request)
    {

        $title = $request->title;
        $command = $request->command;
        Commands::create([
            'title' => $title,
            'command' => $command,
            'user_id' => Auth::id(),
        ]);
        $commandsUpdated = Commands::orderBy('created_at', 'desc')->where('user_id', Auth::id())->get();
        return Inertia::render('CommandKeeper', [
            'commands' => $commandsUpdated
        ]);
    }
}
