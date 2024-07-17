<?php

namespace App\Http\Controllers;

use App\Models\Commands;
use Illuminate\Http\Request;

class CommandsController extends Controller
{
    public function create(Request $request){

        $title = $request->title;
        $command = $request->command;
        Commands::create([
            'title' => $request->title,
            'command' => $request->command
        ]);

        return view('commandKeeper');
    }
}
