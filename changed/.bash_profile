# Add NVM to PATH in Git Bash
export NVM_HOME="$HOME/AppData/Roaming/nvm"
export NVM_SYMLINK="$HOME/AppData/Roaming/nvm/current"
export PATH="$NVM_SYMLINK:$PATH"

# Load NVM
[ -s "$NVM_HOME/nvm.sh" ] && . "$NVM_HOME/nvm.sh"
[ -s "$NVM_HOME/bash_completion" ] && . "$NVM_HOME/bash_completion"
