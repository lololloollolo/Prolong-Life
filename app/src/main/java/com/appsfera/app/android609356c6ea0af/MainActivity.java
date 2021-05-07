/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.appsfera.app.android609356c6ea0af;

import android.os.Bundle;
import android.util.Log;
import org.apache.cordova.*;

// Clear temp files on startup! @siberian
import java.io.File;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Clear temp files on startup! @siberian
        deleteTempFiles(getFilesDir());

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }

    /**
     * @description siberian
     *
     * @param file
     * @return boolean
     */
    private boolean deleteTempFiles(File file) {
        File module = new File(file.getAbsolutePath() + "/module.js");
        if (module.exists()) {
            Log.v("WebView", "Removing webView module.js temp file!");
            module.delete();
            return true;
        }
        Log.v("WebView", "Removing webView module.js temp file!");
        return false;
    }
}
