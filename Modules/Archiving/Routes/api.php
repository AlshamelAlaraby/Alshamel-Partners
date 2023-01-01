<?php

use Illuminate\Http\Request;
use Modules\Archiving\Http\Controllers\ClosedReferenceController;
use Modules\Archiving\Http\Controllers\DepartmentController;
use Modules\Archiving\Http\Controllers\DocStatusController;
use Modules\Archiving\Http\Controllers\DocTypeFieldController;
use Modules\Archiving\Http\Controllers\DocumentController;
use Modules\Archiving\Http\Controllers\DocumentDtlController;
use Modules\Archiving\Http\Controllers\DocumentFieldController;
use Modules\Archiving\Http\Controllers\GenDocTypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/archiving', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'document-field'], function () {
    Route::controller(DocumentFieldController::class)->group(function () {
        Route::get('/', 'all')->name('document.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('document.create');
        Route::put('/{id}', 'update')->name('document.update');
        Route::delete('/{id}', 'delete')->name('document.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});

Route::group(['prefix' => 'archive-closed-reference'], function () {
    Route::controller(ClosedReferenceController::class)->group(function () {
        Route::get('/', 'all')->name('archiveClosedReference.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('archiveClosedReference.create');
        Route::put('/{id}', 'update')->name('archiveClosedReference.update');
        Route::delete('/{id}', 'delete')->name('archiveClosedReference.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});

Route::group(['prefix' => 'arch-department'], function () {
    Route::controller(DepartmentController::class)->group(function () {
        Route::get('/', 'all')->name('archDepartment.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('archDepartment.create');
        Route::put('/{id}', 'update')->name('archDepartment.update');
        Route::delete('/{id}', 'delete')->name('archDepartment.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});

Route::group(['prefix' => 'arch-document'], function () {
    Route::controller(DocumentController::class)->group(function () {
        Route::get('/', 'all')->name('archDocument.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('archDocument.create');
        Route::put('/{id}', 'update')->name('archDocument.update');
        Route::delete('/{id}', 'delete')->name('archDocument.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});

Route::group(['prefix' => 'gen-arch-doc-type'], function () {
    Route::controller(GenDocTypeController::class)->group(function () {
        Route::get('/', 'all')->name('gen-arch-doc-type.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('gen-arch-doc-type.create');
        Route::put('/{id}', 'update')->name('gen-arch-doc-type.update');
        Route::delete('/{id}', 'delete')->name('gen-arch-doc-type.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});


Route::group(['prefix' => 'arch-doc-type-field'], function () {
    Route::controller(DocTypeFieldController::class)->group(function () {
        Route::get('/', 'all')->name('arch-doc-type-field.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('arch-doc-type-field.create');
        Route::put('/{id}', 'update')->name('arch-doc-type-field.update');
        Route::delete('/{id}', 'delete')->name('arch-doc-type-field.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});


Route::group(['prefix' => 'arch-document-dtl'], function () {
    Route::controller(DocumentDtlController::class)->group(function () {
        Route::get('/', 'all')->name('arch-document-dtl.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('arch-document-dtl.create');
        Route::put('/{id}', 'update')->name('arch-document-dtl.update');
        Route::delete('/{id}', 'delete')->name('arch-document-dtl.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});

Route::group(['prefix' => 'arch-doc-status'], function () {
    Route::controller(DocStatusController::class)->group(function () {
        Route::get('/', 'all')->name('archDocStatus.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('archDocStatus.create');
        Route::put('/{id}', 'update')->name('archDocStatus.update');
        Route::delete('/{id}', 'delete')->name('archDocStatus.destroy');
        Route::get('logs/{id}', 'logs');
        Route::post('bulk-delete', 'bulkDelete');
    });
});
