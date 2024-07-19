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

    public function create(Request $request){

        $title = $request->title;
        $command = $request->command;
        Commands::create([
            'title' => $request->title,
            'command' => $request->command
        ]);

        return Inertia::render('CommandKeeper');
    }
}
