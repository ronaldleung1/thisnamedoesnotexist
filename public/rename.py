filename = "./names.txt"

with open(filename, "r") as file:
  lines = file.readlines()

new_lines = []
for line in lines:
  line = line.strip()
  line = "\"" + line + "\","
  new_lines.append(line)

# Print the modified lines
for line in new_lines:
  print(line)

