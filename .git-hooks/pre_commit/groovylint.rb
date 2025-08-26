# frozen_string_literal: true

module Overcommit
  module Hook
    module PreCommit
      class Groovylint < Base
        def run
          return :pass unless applicable_files.any?

          result = execute(command, args: applicable_files)
          return :pass if result.success?

          [:fail, (result.stdout + result.stderr).strip]
        end
      end
    end
  end
end
