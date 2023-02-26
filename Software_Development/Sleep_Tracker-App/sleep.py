import tkinter as tk
import time


class SleepTracker:
    def __init__(self, master):
        self.master = master
        master.title("Sleep Tracker")

        # Set the window size and background color
        master.geometry("400x300")
        master.configure(bg="#f2f2f2")

        # Create the widgets
        self.sleep_label = tk.Label(
            master, text="Sleep Time", font=("Helvetica", 18), bg="#f2f2f2")
        self.sleep_label.pack(pady=20)

        self.sleep_time = tk.Label(
            master, text="00:00:00", font=("Helvetica", 36), bg="#f2f2f2")
        self.sleep_time.pack()

        self.wake_label = tk.Label(
            master, text="Wake Time", font=("Helvetica", 18), bg="#f2f2f2")
        self.wake_label.pack(pady=20)

        self.wake_time = tk.Label(
            master, text="00:00:00", font=("Helvetica", 36), bg="#f2f2f2")
        self.wake_time.pack()

        self.start_button = tk.Button(master, text="Start", font=(
            "Helvetica", 14), command=self.start_timer, bg="#4CAF50", fg="white")
        self.start_button.pack(pady=20)

        self.stop_button = tk.Button(master, text="Stop", font=(
            "Helvetica", 14), command=self.stop_timer, state=tk.DISABLED, bg="#f44336", fg="white")
        self.stop_button.pack(pady=20)

        self.quit_button = tk.Button(master, text="Quit", font=(
            "Helvetica", 14), command=master.quit, bg="#2196F3", fg="white")
        self.quit_button.pack(pady=20)

        # Set up the timer
        self.timer_running = False
        self.start_time = 0
        self.sleep_duration = 0

    def start_timer(self):
        self.timer_running = True
        self.start_time = time.time()
        self.start_button.config(state=tk.DISABLED, bg="#a5a5a5")
        self.stop_button.config(state=tk.NORMAL, bg="#f44336")

    def stop_timer(self):
        self.timer_running = False
        self.sleep_duration = time.time() - self.start_time
        self.sleep_time.config(text=time.strftime(
            "%H:%M:%S", time.localtime(self.start_time)))
        self.wake_time.config(text=time.strftime(
            "%H:%M:%S", time.localtime(time.time())))
        self.start_button.config(state=tk.NORMAL, bg="#4CAF50")
        self.stop_button.config(state=tk.DISABLED, bg="#a5a5a5")

    def update(self):
        if self.timer_running:
            elapsed_time = time.time() - self.start_time
            self.sleep_time.config(text=time.strftime(
                "%H:%M:%S", time.localtime(self.start_time + elapsed_time)))
        self.master.after(1000, self.update)


root = tk.Tk()
sleep_tracker = SleepTracker(root)
sleep_tracker.update()
root.mainloop()
