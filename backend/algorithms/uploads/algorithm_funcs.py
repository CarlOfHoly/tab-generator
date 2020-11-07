import os
import numpy as np
import librosa

CURRENT_FOLDER='./algorithms'

def strikes_and_notes(path):
    target =os.path.join(CURRENT_FOLDER, 'uploads')

    print("----------------------------")
    y, fs = librosa.core.load(os.path.join(target, path),  offset=0.0, duration=None)
    t = librosa.times_like(y, sr=fs)
    
    strikes = librosa.onset.onset_detect(y, sr=fs, units='samples')
    
    played_times = [2]
    played_notes = ["B1", "C2"]


    # for i in range(len(strikes)):
    #     if i == len(strikes)-1:
    #         window = y[strikes[i] : min(len(y), 2*strikes[i]-strikes[i-1])] 
    #     else:
    #         window = y[strikes[i] : strikes[i+1]]
    #     
    #     f0, voiced_flag, voiced_probs = librosa.pyin(window, fmin=librosa.note_to_hz('C2'), fmax=librosa.note_to_hz('C7'),  fill_na=None)
    #     f0_est = np.median(f0[~np.isnan(f0)])
    #
    #     if ~np.isnan(f0_est):
    #         played_notes.append(f0_est)
    #         played_times.append(librosa.samples_to_time(strikes[i], sr=fs))
        
    return played_times, played_notes
