require "parallel"

module Parallel
  module ProcessorCount
    alias_method :old_processor_count, :processor_count

    # returns the numbers of processors divided by three
    def processor_count
      [1, (old_processor_count / 3.0).round].max
    end
  end
end