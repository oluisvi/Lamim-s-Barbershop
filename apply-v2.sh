#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 /path/to/Lamim-s-Barbershop [--skip-verify]" >&2
  exit 2
fi

repo="$(cd "$1" && pwd)"
skip_verify="${2:-}"
patch_root="$(cd "$(dirname "$0")" && pwd)"

while IFS= read -r -d '' file; do
  rel="${file#"$patch_root"/}"
  case "$rel" in
    README_APPLY.md|APPLY_V2.ps1|apply-v2.sh|PATCH_MANIFEST.json) continue ;;
  esac
  dest="$repo/$rel"
  mkdir -p "$(dirname "$dest")"
  cp "$file" "$dest"
  printf 'Applied %s\n' "$rel"
done < <(find "$patch_root" -type f -print0)

if [[ "$skip_verify" != "--skip-verify" ]]; then
  cd "$repo"
  npm run test:real-space
  npm run test:experience
  npm run validate:source
  npm run typecheck
  npm run build
fi
