<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\Commands;
use Illuminate\Http\Request;

class CommandsController extends Controller
{
    public function index()
    {
        $commands = Commands::orderBy('created_at', 'desc')->get();
        return Inertia::render('CommandKeeper', [
            'commands' => $commands
        ]);
    }

    public function search(Request $request)
    {
        dd("prout");
        $query = $request->input('query', '');

        $commands = Command::where('title', 'like', "%{$query}%")
            ->orWhere('command', 'like', "%{$query}%")
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($commands);
    }

    public function create(Request $request)
    {

        $title = $request->title;
        $command = $request->command;
        Commands::create([
            'title' => $request->title,
            'command' => $request->command
        ]);

        return Inertia::render('CommandKeeper');
    }
}
